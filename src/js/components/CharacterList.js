'use strict';

var _ = require('lodash');
var React = require('react');
var ListenerMixin = require('alt/mixins/ListenerMixin')
var ConfigStore = require('../stores/ConfigStore')
var ConfigActions = require('../actions/ConfigActions');
var CharacterView = require('./CharacterView');
var MasonryMixin = require('react-masonry-mixin');

var masonryOptions = {
    transitionDuration: 0
};

module.exports = React.createClass({
  mixins: [ListenerMixin, MasonryMixin('masonryContainer', masonryOptions)],

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
    var characters = _.map(this.state.characters, function(character, index){
      return <CharacterView character={character} key={index}/>;
    });

    return <div ref="masonryContainer">{characters}</div>;
  }
});
