'use strict';

var alt = require('../alt');

module.exports = alt.createActions(class ConfigActions {
  constructor() {
    this.generateActions(
      'updateConfig',
      'defaultConfig',
      'deleteCharacter',
      'addCharacter',
      'rerollCharacter',
      'rerollAllCharacters',
      'deleteAllCharacters');
  }
});
