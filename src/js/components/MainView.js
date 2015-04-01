'use strict';

var React = require('react');
var CharacterList = require('./CharacterList');
var HeaderBar = require('./HeaderBar');

module.exports = React.createClass({
  render: function() {
    return <div><HeaderBar /><CharacterList /></div>;
  }
});;
