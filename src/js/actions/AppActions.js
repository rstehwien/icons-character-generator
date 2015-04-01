'use strict';

var alt = require('../alt');

module.exports = alt.createActions(class AppActions {
  constructor() {
    this.generateActions('showConfig', 'showCharacters');
  }
});
