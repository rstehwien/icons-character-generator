'use strict';

var React = require('react');
var IconsGenerator = require('../lib/IconsGenerator.js');

var CharacterView = React.createClass({
  render: function() {
    return <div><pre>{IconsGenerator.formatCharacterTable(this.props.character)}</pre></div>;
  }
});


module.exports = CharacterView;
