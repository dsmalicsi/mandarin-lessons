import {Meteor} from 'meteor/meteor';

export const isLoggedIn = (nextState, replace) => {
  /**
   * If there is no User currently logged in, redirect them
   * to the '/login' route.
   */

  if (Meteor.userId() === null) {
    replace({
      pathname: '/login'
    });
  }
}