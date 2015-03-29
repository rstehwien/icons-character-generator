var IconsGen = require('./src/js/icons.js');

for (var i = 0; i < 5; i++) {
  console.log(IconsGen.formatCharacterTable(IconsGen.rollCharacter()));
}
