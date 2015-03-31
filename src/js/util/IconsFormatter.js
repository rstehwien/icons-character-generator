'use strict';

var _ = require('lodash');
var Table = require('cli-table2');

function formatCharacterTable(character) {
  var table = new Table({
    style:{head:[],border:[]},
    chars: {
        'top': '-' , 'top-mid': '+' , 'top-left': '+' , 'top-right': '+',
        'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '+' , 'bottom-right': '+',
        'left': '|' , 'right': '|'  , 'middle': '|',
        'mid': '-', 'left-mid': '+', 'mid-mid': '+', 'right-mid': '+'
      }
    });

  table.push(['ORIGIN', {colSpan:2,content:_.map(character.origin, 'name').join(', ')}]);

  table.push([{colSpan:3, hAlign:'center', content: 'ATTRIBUTES'}]);
  _.forEach(character['attributes'], function (item){
    table.push([item.name, item.adjective, item.level]);
  });

  table.push([{colSpan:3, hAlign:'center', content: 'POWERS'}]);
  _.forEach(character.powers, function (item){
    table.push([item.name, item.adjective, item.level]);
  });

  table.push([{colSpan:3, hAlign:'center', content: 'SPECIALITIES'}]);
  _.forEach(character.specialities, function (item){
    table.push([{colSpan:3, content: item.name}]);
  });

  table.push([{colSpan:3, hAlign:'center', content: 'OPTIONS'}]);
  table.push([{colSpan:3, content: _.map(character.origin, 'option').join('\n')}]);

  return table.toString();
};

module.exports = {
  formatCharacterTable:formatCharacterTable
};
