'use strict';

var alt = require('../alt');
var ConfigActions = require('../actions/ConfigActions');
var IconsGenerator = require('../util/IconsGenerator');
var IconsConfig = require('../util/IconsConfig');

module.exports = alt.createStore(class ConfigStore {
  constructor() {
    this.characters = [];
    this.defaultConfig();
    this.addCharacter();
    this.bindActions(ConfigActions);
  }

  updateConfig(config) {
    this.config = config;
    this.generator = new IconsGenerator(this.config);
  }

  defaultConfig() {
    this.updateConfig(IconsConfig);
  }

  deleteCharacter(idx) {
    if (this.characters.length > 1) {
      this.characters.splice(idx, 1);
    }
  }

  rerollCharacter(idx) {
    this.characters.splice(idx, 1, this.generator.rollCharacter());
  }

  addCharacter() {
    this.characters.push(this.generator.rollCharacter());
  }

  rerollAllCharacters() {
    var len = this.characters.length;
    for (var i = 0; i < len; i++) {
      this.characters.splice(i, 1, this.generator.rollCharacter());
    }
  }

  deleteAllCharacters() {
    this.characters.splice(0, this.characters.length-1);
  }
});
