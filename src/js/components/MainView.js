'use strict';

var React = require('react');
var CharacterList = require('./CharacterList');
var ConfigView = require('./ConfigView');
var CharactersTextModal = require('./CharactersTextModal');
var HeaderBar = require('./HeaderBar');
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

  render: function() {
    var view = this.state.isShowCharacter ? <CharacterList/> : <ConfigView/>
    return <div><HeaderBar/>{view}<CharactersTextModal/></div>;
  }
});;
