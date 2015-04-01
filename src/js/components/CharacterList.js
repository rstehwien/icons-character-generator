'use strict';

var _ = require('lodash');
var React = require('react');
var ListenerMixin = require('alt/mixins/ListenerMixin')
var ConfigStore = require('../stores/ConfigStore')
var ConfigActions = require('../actions/ConfigActions');
var CharacterView = require('./CharacterView');

module.exports = React.createClass({
  mixins: [ListenerMixin],

  getInitialState: function() {
    return ConfigStore.getState()
  },

  componentDidMount: function() {
    this.listenTo(ConfigStore, this.onChange)
  },

  onChange: function() {
    this.setState(this.getInitialState())
  },

  addCharacter: function() {
    ConfigActions.addCharacter();
  },

  render: function() {
    var characters;
    if (this.state.characters.length == 0) {
      characters = [<div className="col-sm-6 col-md-4" key="0">
        <div className="panel"  onClick={this.addCharacter}>
          <div className="alert alert-danger text-center" role="alert">Add Characters</div>
        </div>
      </div>];
    }
    else {
      characters = _.map(this.state.characters, function(character, index){
        return <div className="row" key={index}><CharacterView character={character} characterIndex={index}/></div>;
      });
    }

    return <div className="container-fluid">{characters}</div>;
  }
});
