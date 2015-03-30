'use strict';

var _ = require('lodash');
var Table = require('cli-table2');
var IconsConfig = require('./IconsConfig.js');

function tablePick(table, roll) {
  var pick = table[0];
  for (var i = 1; i < table.length; i++) {
    if (table[i].max  > roll) {
      break;
      }
    else {
      pick = table[i];
    }
  }
  return pick;
}

function rollTable(table) {
  var max = _.max(table, 'max').max;
  var roll = max == 12 ? _.random(1,6)+_.random(1,6) : _.random(1,6);
  var pick = tablePick(table, roll);
  if (_.has(pick, 'table')) {
    return rollTable(pick.table);
  }
  else {
    return pick;
  }
}

function rollTableNoRepeat(table, items) {
  var found = true;
  var pick;
  while (found) {
    pick = rollTable(table);
    found = _.find(items, function(item){
      return _.isEqual(pick.name, item.name);
    });
  }
  return pick;
}

function rollOrigin(origins) {
  var table = IconsConfig['tables']['origin'];
  var origin = _.clone(rollTableNoRepeat(table, origins));
  delete origin['max'];
  return origin;
}

function rollOrigins() {
  var origins = [rollOrigin(origins)];
  if (origins[0].name == IconsConfig['originRollTwiceName'] && _.random(1,6) <= IconsConfig['originRollTwiceChance']) {
    origins.push(rollOrigin(origins));
    origins.push(rollOrigin(origins));
    origins.shift();
  }
  return origins;
}

function rollAbilityLevel(name) {
  var level = rollTable(IconsConfig['tables']['level']);
  var ability = {"name": name, "level": level.value, "adjective": level.adjective};
  return ability;
}

function rollAttributes(origin) {
  var attrib;
  var total = 0;
  while (total < IconsConfig['minimumAttributes']) {
    attrib = [];
    _.forEach(IconsConfig['attributes'], function (a) {
      attrib.push(rollAbilityLevel(a));
    });
    total = _.sum(attrib, 'level');
  }
  return attrib;
}

function rollPowers(origin) {
  var powers = [];
  var num = rollTable(IconsConfig['tables']['numPowers']).value;
  _.forEach(origin, function(o) {
    if (_.isString(o.powers)) {
      powers.push(rollAbilityLevel(o.powers));
    }
    else if (_.isNumber(o.powers)) {
      num += o.powers;
    }
  });

  var table = IconsConfig['tables']['powers'];
  for (var i = 0; i < num; i++) {
    powers.push(rollAbilityLevel(rollTableNoRepeat(table, powers).name));
  }

  return powers;
}

function rollSpecialities(origin) {
  var specialities = [];
  var num = rollTable(IconsConfig['tables']['numSpecialities']).value;
  _.forEach(origin, function(o) {
    if (_.isNumber(o.specialities)) {
      num += o.specialities;
    }
  });

  var table = IconsConfig['tables']['specialities'];
  for (var i = 0; i < num; i++) {
    specialities.push({"name": rollTableNoRepeat(table, specialities).name});
  }

  return specialities;
}

function characterPointsTotal(character) {
  var total = _.sum(character['attributes'], 'level');
  total += _.sum(character.powers, 'level');
  total += character.specialities.length;
  _.forEach(character.origin, function(o){
    if (_.isNumber(o.optionPoints)) {
      total += o.optionPoints;
    }
  });
  return total;
}

function characterPointsOrigin(character) {
  var originTotal = 0;

  // find number of powers granted by origin
  var extraPowers = 0;
  _.forEach(character.origin, function(o) {
    if (_.isNumber(o.powers)) {
      extraPowers += o.powers;
    }
    else if (_.isString(o.powers)) {
      extraPowers += 1;
    }
  });

  // add the level of the powers granted by origin
  for (var i = 0; i < extraPowers; i++) {
    originTotal += character.powers[i].level;
  }

  // add the number of specialities granted by origin
  _.forEach(character.origin, function(o) {
    if (_.isNumber(o.specialities)) {
      originTotal += o.specialities;
    }
  });

  // add the value of the origins
  _.forEach(character.origin, function(o){
    if (_.isNumber(o.optionPoints)) {
      originTotal += o.optionPoints;
    }
  });

  return originTotal;
}

function IconsCharacterCreator(opt) {
    //hide "new"
    if (!(this instanceof FunkyParser))
        return new IconsCharacterCreator(opt);
    //make params optional
    opt = opt||{};

    //this.foo = opt.foo || 'default';
    // handle other options...
}

function rollCharacter() {
  var character;
  var total = 0;
  while (total < IconsConfig['minimumCharacterPoints']) {
    var character = {};
    character.origin = rollOrigins();
    character['attributes'] = rollAttributes(character.origin);
    character.powers = rollPowers(character.origin);
    character.specialities = rollSpecialities(character.origin);
    character.characterPoints = characterPointsTotal(character);
    total = character.characterPoints - characterPointsOrigin(character);
  }
  return character;
};

function formatCharacterTable(character) {
  var table = new Table({
    style:{head:[],border:[]},
    chars: {
        'top': '-' , 'top-mid': '+' , 'top-left': '+' , 'top-right': '+',
        'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '+' , 'bottom-right': '+',
        'left': '|' , 'right': '|'  , 'middle': '|',
        'mid': '-', 'left-mid': '|', 'mid-mid': '+', 'right-mid': '|'
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
  rollCharacter:rollCharacter,
  formatCharacterTable:formatCharacterTable
};
