import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// modules
import coreModule from './modules/core';

// Reducers
const coreReducers = coreModule.reducer;

//
const reducer = combineReducers({
  routing: routerReducer,
  ...coreReducers
});

// init context
const context = initContext({reducer});

// create app
const app = createApp(context);

// load modules
app.loadModule(coreModule);
app.init();
