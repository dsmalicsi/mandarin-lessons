import {browserHistory} from 'react-router';

export default {

  loginUser({Meteor, Store, Helper}, data){

    Meteor.loginWithPassword(data.email, data.password, function (err, res) {
      if (err) {
        console.log(err)
        Store.dispatch({type: 'LOGIN_MESSAGE', message: 'There was an error logging in. Please try again.'})
      } else {
        //redirection
        console.log(res)

        Store.dispatch({type: 'LOGIN_MESSAGE', message: 'Success'});

        browserHistory.replace('/manage');


      }
    });

  }

};
