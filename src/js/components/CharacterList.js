'use strict';

var _ = require('lodash');
var React = require('react');
var ConfigStore = require('../stores/ConfigStore.js');
var CharacterView = require('./CharacterView.js');

var CharacterList = React.createClass({
  getInitialState() {
    return ConfigStore.getState();
  },

  componentDidMount() {
    ConfigStore.listen(this.onChange);
  },

  componentWillUnmount() {
    ConfigStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    var characters = _.map(this.state.generator.rollCharacters(), function(character, index){
      return <CharacterView character={character} key={index}/>;
    });

    return <div>{characters}</div>;
  }
});

module.exports = CharacterList;
