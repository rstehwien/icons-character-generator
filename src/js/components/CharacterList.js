'use strict';

var _ = require('lodash');
var React = require('react');
var ListenerMixin = require('alt/mixins/ListenerMixin')
var ConfigStore = require('../stores/ConfigStore')
var CharacterView = require('./CharacterView');

module.exports = React.createClass({
  mixins: [ListenerMixin],

  getInitialState() {
    return ConfigStore.getState()
  },

  componentDidMount() {
    this.listenTo(ConfigStore, this.onChange)
  },

  onChange() {
    this.setState(this.getInitialState())
  },

  render() {
    var characters = _.map(this.state.characters, function(character, index){
      return <CharacterView character={character} key={index}/>;
    });

    return <div>{characters}</div>;
  }
});
