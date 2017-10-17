import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
/////
import * as Helper from '/lib/helpers';
import {createStore} from 'redux';

export default function ({reducer}) {
  return {
    Meteor,
    Collections,
    Store: createStore(reducer),
    Tracker,
    Helper
  };
}
