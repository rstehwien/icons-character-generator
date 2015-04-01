'use strict';

var _ = require('lodash');
var IconsConfig = require('./IconsConfig');

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

function rollOrigin(config, origins) {
  var table = config['tables']['origin'];
  var origin = _.clone(rollTableNoRepeat(table, origins));
  delete origin['max'];
  return origin;
}

function rollOrigins(config) {
  var origins = [rollOrigin(config, origins)];
  if (origins[0].name == config['originRollTwiceName'] && _.random(1,6) <= config['originRollTwiceChance']) {
    origins.push(rollOrigin(config, origins));
    origins.push(rollOrigin(config, origins));
    origins.shift();
  }
  return origins;
}

function rollAbilityLevel(config, name) {
  var level = rollTable(config['tables']['level']);
  var ability = {"name": name, "level": level.value, "adjective": level.adjective};
  return ability;
}

function rollAttributes(config, origin) {
  var attrib;
  var total = 0;
  while (total < config['minimumAttributes']) {
    attrib = [];
    _.forEach(config['attributes'], function (a) {
      attrib.push(rollAbilityLevel(config, a));
    });
    total = _.sum(attrib, 'level');
  }
  return attrib;
}

function rollPowers(config, origin) {
  var powers = [];
  var num = rollTable(config['tables']['numPowers']).value;
  _.forEach(origin, function(o) {
    if (_.isString(o.powers)) {
      powers.push(rollAbilityLevel(config, o.powers));
    }
    else if (_.isNumber(o.powers)) {
      num += o.powers;
    }
  });

  var table = config['tables']['powers'];
  for (var i = 0; i < num; i++) {
    powers.push(rollAbilityLevel(config, rollTableNoRepeat(table, powers).name));
  }

  return powers;
}

function rollSpecialities(config, origin) {
  var specialities = [];
  var num = rollTable(config['tables']['numSpecialities']).value;
  _.forEach(origin, function(o) {
    if (_.isNumber(o.specialities)) {
      num += o.specialities;
    }
  });

  var table = config['tables']['specialities'];
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

function IconsGenerator(config) {
  this.config = config||IconsConfig;
}

IconsGenerator.prototype.rollCharacter = function() {
  var character;
  var total = 0;
  while (total < this.config['minimumCharacterPoints']) {
    var character = {};
    character.origin = rollOrigins(this.config);
    character['attributes'] = rollAttributes(this.config, character.origin);
    character.powers = rollPowers(this.config, character.origin);
    character.specialities = rollSpecialities(this.config, character.origin);
    character.characterPoints = characterPointsTotal(character);
    total = character.characterPoints - characterPointsOrigin(character);
  }
  return character;
};

IconsGenerator.prototype.rollCharacters = function() {
  var num = this.config.numberCharacters||1;
  var characters = [];
  for (var i = 0; i < num; i++) {
    characters.push(this.rollCharacter());
  }
  return characters;
}

module.exports = IconsGenerator;
