'use strict';

var React = require('react');
var ListenerMixin = require('alt/mixins/ListenerMixin')
var ConfigStore = require('../stores/ConfigStore')
var ConfigActions = require('../actions/ConfigActions');
var IconsGenerator = require('../util/IconsGenerator');
var _ = require('lodash');

module.exports = React.createClass({
  mixins: [ListenerMixin],

  getInitialState: function() {
    return {configText: JSON.stringify(ConfigStore.getState().config, null, 2), error: null};
  },

  componentDidMount: function() {
    this.listenTo(ConfigStore, this.onChange);
  },

  onChange: function() {
    this.setState(this.getInitialState());
  },

  saveConfig: function() {
    if (_.has(this.state, 'config')) ConfigActions.updateConfig(this.state.config);
  },

  createConfig: function(txt) {
    var cfg = null;
    try {
      cfg = JSON.parse(txt);
      var generator = new IconsGenerator(cfg);
      generator.rollCharacter();
      console.log("SET SUCCESS");
      this.setState({configText: txt, config: cfg, error: null});
    }
    catch(err) {
      var msg;
      if (_.isString(err)) msg = err;
      else if (_.isError(err)) msg = err.message;
      else msg = "Unknown Error";
      this.setState({error: msg, configText: txt});
      cfg = null;
    }
    return cfg;
  },

  defaultConfig: function() {
    ConfigActions.defaultConfig();
  },

  restoreConfig: function() {
    this.setState(this.getInitialState());
  },

  handleTextChange: function(event) {
    this.createConfig(event.target.value);
  },

  render: function() {
    console.log("RENDER");
    var err = null;
    if (_.has(this.state, 'error') && _.isString(this.state.error)) {
      console.log("RENDER ERROR");
      err = <div className="alert alert-danger text-center" role="alert">{this.state.error}</div>;
    }

    return <div>{err}<form>
      <div className="form-group">
        <label htmlFor="config">Configuration:</label>
        <textarea className="form-control" rows="40" id="config" onChange={this.handleTextChange} value={this.state.configText} />
      </div>
      <div className="btn-group" role="group" aria-label="...">
        <button type="button" className="btn btn-default" onClick={this.saveConfig}>Save</button>
        <button type="button" className="btn btn-default" onClick={this.restoreConfig}>Restore</button>
        <button type="button" className="btn" onClick={this.defaultConfig}>Default</button>
      </div>
    </form></div>;
  }
});;
