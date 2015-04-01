'use strict';

var alt = require('../alt');
var AppActions = require('../actions/AppActions');

module.exports = alt.createStore(class AppStore {
  constructor() {
    this.bindActions(AppActions);
  }

  showConfig() {
  }

  showCharacters() {
  }
});
