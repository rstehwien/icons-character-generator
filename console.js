var IconsGenerator = require('./src/js/util/IconsGenerator.js');

for (var i = 0; i < 5; i++) {
  console.log(IconsGenerator.formatCharacterTable(IconsGenerator.rollCharacter()));
}
