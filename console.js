'use strict';

var _ = require('lodash');
var IconsGenerator = require('./src/js/util/IconsGenerator');
var IconsFormatter = require('./src/js/util/IconsFormatter');

var gen = new IconsGenerator();
var characters = gen.rollCharacters();
_.forEach(characters, function(character){
  console.log(IconsFormatter.formatCharacterTable(character));
});
