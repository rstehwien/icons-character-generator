'use strict';

var React = require('react');
var ConfigActions = require('../actions/ConfigActions');
var AppActions = require('../actions/AppActions');
var ListenerMixin = require('alt/mixins/ListenerMixin')
var AppStore = require('../stores/AppStore')

module.exports = React.createClass({
  mixins: [ListenerMixin],

  getInitialState: function() {
    return AppStore.getState()
  },

  componentDidMount: function() {
    this.listenTo(AppStore, this.onChange)
  },

  onChange: function() {
    this.setState(this.getInitialState())
  },

  addCharacter: function() {
    ConfigActions.addCharacter();
  },

  removeAll: function() {
    ConfigActions.deleteAllCharacters();
  },

  rerollAll: function() {
    ConfigActions.rerollAllCharacters();
  },

  showCharacter: function() {
    AppActions.showCharacters();
  },

  showConfig: function() {
    AppActions.showConfig();
  },

  toggleFormat: function() {
    AppActions.toggleFormat();
  },

  render: function() {
    var ischar = this.state.isShowCharacter;

    var toolbar = [];
    if (ischar) {
      var format = this.state.isFormatText ? "glyphicon glyphicon-font" : "glyphicon glyphicon-th";
      toolbar.push(<li key="0" onClick={this.toggleFormat}><a href="#"><span className={format} aria-hidden="true"></span> Format</a></li>)
      toolbar.push(<li key="1" onClick={this.addCharacter}><a href="#"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add</a></li>)
      toolbar.push(<li key="2" onClick={this.removeAll}><a href="#"><span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> Remove All</a></li>)
      toolbar.push(<li key="3" onClick={this.rerollAll}><a href="#"><span className="glyphicon glyphicon-refresh" aria-hidden="true"></span> Reroll All</a></li>)
    }
    toolbar.push(<li key="4"><a href="https://github.com/rstehwien/icons-character-generator" target="_blank"><span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span></a></li>);

    return <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">ICONS Character Creator</a>
        </div>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="nav navbar-nav">
            <li className={ischar?'active':null} onClick={this.showCharacter}><a href="#">Character</a></li>
            <li className={!ischar?'active':null} onClick={this.showConfig}><a href="#">Config</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {toolbar}
          </ul>
        </div>
      </div>
    </nav>
  }
});;
