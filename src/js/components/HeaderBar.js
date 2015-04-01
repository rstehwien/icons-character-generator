'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var ischar=false;
    return <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">ICONS Character Creator</a>
        </div>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="nav navbar-nav">
            <li className={ischar?'active':null}><a href="#">Character</a></li>
            <li className={!ischar?'active':null}><a href="#">Config</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-refresh" aria-hidden="true"></span></a></li>
            <li><a href="#"><span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  }
});;
