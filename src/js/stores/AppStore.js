'use strict';

var alt = require('../alt');
var AppActions = require('../actions/AppActions');

module.exports = alt.createStore(class AppStore {
  constructor() {
    this.isShowCharacter = true;
    this.isFormatText = false;
    this.bindActions(AppActions);
  }

  showConfig() {
    this.isShowCharacter = false;
  }

  showCharacters() {
    this.isShowCharacter = true;
  }

  toggleFormat() {
    this.isFormatText = !this.isFormatText;
  }
});
