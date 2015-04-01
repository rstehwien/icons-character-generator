'use strict';

var React = require('react');
var _ = require('lodash');
var IconsFormatter = require('../util/IconsFormatter');
var ListenerMixin = require('alt/mixins/ListenerMixin')
var AppStore = require('../stores/AppStore')
var IconsFormatter = require('../util/IconsFormatter');

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
    var character = this.props.character;
    var content;

    if (this.state.isFormatText) {
      return <div className="panel panel-primary">
        <pre>{IconsFormatter.formatCharacterTable(character)}</pre>
      </div>;
    }
    else {
      var attributes = _.map(character['attributes'], function(item, idx) {
        return <tr key={"a_"+idx}><td>{item.name}</td><td>{item.adjective}</td><td>{item.level}</td></tr>;
      });
      var powers = _.map(character['powers'], function(item, idx) {
        return <tr key={"p_"+idx}><td>{item.name}</td><td>{item.adjective}</td><td>{item.level}</td></tr>;
      });
      var specialities = _.map(character['specialities'], function(item, idx) {
        return <tr key={"s_"+idx}><td colSpan="3">{item.name}</td></tr>;
      });
      var options = _.flatten(_.map(character.origin, 'options')).map(function(item, idx){
        return <tr key={"o_"+idx}><td colSpan="3">{item}</td></tr>;
      });

      return <div className="col-sm-6 col-md-4"><div className="panel panel-primary">
        <table className="table table-bordered table-condensed table-hover">
          <tbody>
            <tr className="info">
              <td><strong>Origin</strong></td><td colSpan="2">{_.map(character.origin, 'name').join(', ')}</td>
            </tr>
            <tr className="info">
              <td colSpan="3" className="text-center"><strong>Attributes</strong></td>
            </tr>
            {attributes}
            <tr className="info">
              <td colSpan="3" className="text-center"><strong>Powers</strong></td>
            </tr>
            {powers}
            <tr className="info">
              <td colSpan="3" className="text-center"><strong>Specialities</strong></td>
            </tr>
            {specialities}
            <tr className="info">
              <td colSpan="3" className="text-center"><strong>Options</strong></td>
            </tr>
            {options}
          </tbody>
        </table>
      </div></div>;
    }

  }
});;
