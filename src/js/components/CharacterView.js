'use strict';

var React = require('react');
var IconsFormatter = require('../util/IconsFormatter.js');

var CharacterView = React.createClass({
  render: function() {
    return <div><pre>{IconsFormatter.formatCharacterTable(this.props.character)}</pre></div>;
  }
});


module.exports = CharacterView;
