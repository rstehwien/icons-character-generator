'use strict';

var React = require('react');
var _ = require('lodash');
var IconsGenerator = require('../lib/IconsGenerator.js');
var CharacterView = require('./CharacterView.js');

var CharacterList = React.createClass({
  render: function() {
    var characters = [];
    var num = _.parseInt(this.props.number);
    for (var i = 0; i < num; i++) {
      characters.push(<CharacterView character={IconsGenerator.rollCharacter()}/>);
    }

    return <div>{characters}</div>;
  }
});

module.exports = CharacterList;