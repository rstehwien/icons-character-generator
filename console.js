var icons = require('./app/icons.js');

for (var i = 0; i < 5; i++) {
  console.log(icons.formatCharacterTable(icons.rollCharacter()));
}
