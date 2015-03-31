'use strict';

var alt = require('../alt');
var ConfigActions = require('../actions/ConfigActions');
var IconsGenerator = require('../util/IconsGenerator.js');
var IconsConfig = require('../util/IconsConfig.js');

class ConfigStore {
  constructor() {
    this.config = IconsConfig;
    this.generator = new IconsGenerator(this.config);

    this.bindListeners({
      handleUpdateConfig: ConfigActions.UPDATE_CONFIG
    });
  }

  handleUpdateConfig(config) {
    this.config = config;
    this.generator = new IconsGenerator(this.config);
  }
}

module.exports = alt.createStore(ConfigStore, 'ConfigStore');
