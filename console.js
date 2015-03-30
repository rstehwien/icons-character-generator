var IconsGenerator = require('./src/js/lib/IconsGenerator.js');

for (var i = 0; i < 5; i++) {
  console.log(IconsGenerator.formatCharacterTable(IconsGenerator.rollCharacter()));
}
