import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux'
import {isLoggedIn} from './authentication.js';


//Core Pages
import MainLayout from './components/main_layout';
import Home from './components/home';

export default function (injectDeps, {Store}) {

  const MainLayoutCtx = injectDeps(MainLayout);
  const history = syncHistoryWithStore(browserHistory, Store);

  let PageList = [

    //===============
    //Core Routes
    {path: '/', title: 'Home', component: Home},


    //====
    //Temporary Routes with Children
    {
      path: '/home', title: 'Home', childRoute: [
        {path: '/home', title: 'Home', auth: false, component: Home, indexRoute: true}
      ]
    }

  ]

  //Loop all the routes for rendering
  let routes = PageList.map((page, index)=> {
    let childRoute;
    if (page.childRoute) {
      childRoute = page.childRoute.map((child, index)=> {
        return child.indexRoute ? child.auth ?
          <IndexRoute
            title={child.title}
            component={child.component}
            isIndex={true}
            onEnter={isLoggedIn}
            key={index}/>
          :
          <IndexRoute
            title={child.title}
            component={child.component}
            isIndex={true}
            key={index}/>
          : child.auth ?
            <Route path={child.path}
                   title={child.title}
                   component={child.component}
                   onEnter={isLoggedIn}
                   key={index}/>
            :
            <Route path={child.path}
                   title={child.title}
                   component={child.component}
                   key={index}/>
      })
    }

    // Also pass custom props to component when route has no set of child routes
    return (
      page.auth ?
        <Route path={page.path}
               title={page.title}
               component={page.component}
               onEnter={isLoggedIn}
               key={index}>
          {childRoute}
        </Route>
        :
        <Route path={page.path}
               title={page.title}
               component={page.component}
               key={index}>
          {childRoute}
        </Route>)
  });

  //The declaration of routes
  //We have to wait for the Roles subs to get the async data from it
  //NOTE: this is the only route we will set we have to import all the component here and set it on the pageList above
  Tracker.autorun(function () {
    // if (Roles.subscription.ready()) {
    $(document).ready(function () {
      ReactDOM.render(
        (<Provider store={Store}>
          <Router history={history}>
            <Route component={MainLayoutCtx} pageList={PageList}>
              {routes}
              {/* todo: The path below should return an invalid/404 page */}
              <Route path="*" component={Home}/>
            </Route>
          </Router>
        </Provider>),
        document.getElementById('app')
      );
    });
    // }
  });


}