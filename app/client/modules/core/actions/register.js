import {browserHistory} from 'react-router';
import {Accounts} from 'meteor/accounts-base'

export default {

  registerUser({Meteor, Store, Helper}, data){

    if (data.password == data.cpassword) {
      let id = Accounts.createUser({
        email: data.email,
        password: data.password,
        profile: {name: data.name}
      }, function (err, res) {

        console.log(err,res)

        Meteor.loginWithPassword(data.email, data.password, function (err, res) {
          console.log(err,res)

          if (err) {
          } else {
            //redirection
            Store.dispatch({type: 'LOGIN_MESSAGE', message: 'Success'});
            browserHistory.replace('/manage');
          }
        });
      });
    } else {
      Store.dispatch({type: 'REGISTER_MESSAGE', message: 'Passwords do not match!'})
    }


  }

};
