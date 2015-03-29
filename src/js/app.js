'use strict';

var _ = require('lodash');
var React = require('react');
var IconsGen = require('./icons.js');

var IconsCharacters = React.createClass({
  render: function() {
    var characters = "";
    var num = _.parseInt(this.props.number);
    for (var i = 0; i < num; i++) {
      characters += IconsGen.formatCharacterTable(IconsGen.rollCharacter());
      characters += "\n\n";
    }

    return <div><pre>{characters}</pre></div>;
  }
});

React.render(<IconsCharacters number="5" />, document.getElementById('main'));
