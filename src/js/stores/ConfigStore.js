'use strict';

var alt = require('../alt');
var ConfigActions = require('../actions/ConfigActions');
var IconsGenerator = require('../util/IconsGenerator');
var IconsConfig = require('../util/IconsConfig');

module.exports = alt.createStore(class ConfigStore {
  constructor() {
    this.updateConfig(IconsConfig);
    this.bindActions(ConfigActions);
  }

  updateConfig(config) {
    this.config = config;
    this.generator = new IconsGenerator(this.config);
    this.characters = this.generator.rollCharacters();
  }
});
