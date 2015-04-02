'use strict';

var React = require('react');
var _ = require('lodash');
var ListenerMixin = require('alt/mixins/ListenerMixin')
var ConfigStore = require('../stores/ConfigStore')
var IconsFormatter = require('../util/IconsFormatter');

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

  render: function() {
    var txt = "";
    _.each(this.state.characters, function(character){
      if (txt.length != 0) txt += "\n";
      txt += IconsFormatter.formatCharacterTable(character);
    });

    return <div className="modal fade" id="charactersTextModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">Characters</h4>
          </div>
          <div className="modal-body">
            <pre>{txt}</pre>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>;
  }
});
