'use strict';

var alt = require('../alt');

class ConfigActions {
  updateConfig(config) {
    this.dispatch(config);
  }
}

module.exports = alt.createActions(ConfigActions);
