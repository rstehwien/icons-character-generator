'use strict';

module.exports = {
  "numberCharacters": 5,
  "attributes": ["Prowess", "Coordination", "Strength", "Intellect", "Awareness", "Willpower"],
  "originRollTwiceName": "Unearthly",
  "originRollTwiceChance": 2,
  "minimumAttributes": 20,
  "minimumCharacterPoints": 40,
  "tables": {
    "origin":[
      {"max": 4, "name": "Trained", "specialities": 2, "options": ["+2 specialities (already added)","Trade power for +2 specialities"], "optionPoints": 0},
      {"max": 6, "name": "Transformed", "options": ["+2 to one ability"], "optionPoints": 2},
      {"max": 7, "name": "Birthright", "powers": 1, "options": ["+1 Bonus Power (already added)","Drop bonus power for +2 to another power"], "optionPoints": 0},
      {"max": 9, "name": "Gimmick", "options": ["+2 to one mental attribute"], "optionPoints": 2},
      {"max": 10, "name": "Artificial", "powers": "Life Support", "options": ["Life Support (already added)","Strength +2","Trade power to set Life Support to 10"], "optionPoints": 2},
      {"max": 12, "name": "Unearthly", "options": ["Increase two abilities +2"], "optionPoints": 4}
    ],
    "level": [
      {"max": 2, "value": 1, "adjective": "Weak"},
      {"max": 3, "value": 2, "adjective": "Poor"},
      {"max": 4, "value": 3, "adjective": "Average"},
      {"max": 6, "value": 4, "adjective": "Fair"},
      {"max": 8, "value": 5, "adjective": "Good"},
      {"max": 10, "value": 6, "adjective": "Great"},
      {"max": 11, "value": 7, "adjective": "Incredible"},
      {"max": 12, "value": 8, "adjective": "Amazing"}
    ],
    "numPowers": [
      {"max": 4, "value": 2},
      {"max": 7, "value": 3},
      {"max": 10, "value": 4},
      {"max": 12, "value": 5}
    ],
    "numSpecialities": [
      {"max": 4, "value": 1},
      {"max": 7, "value": 2},
      {"max": 10, "value": 3},
      {"max": 12, "value": 4}
    ],
    "powers":[
      {"max":3, "name":"Mental", "table":[
        {"max":3, "table":[
          {"max":1, "name": "Astral Projection"},
          {"max":2, "name": "Dream Control"},
          {"max":4, "name": "Emotion Control"},
          {"max":5, "name": "Illusion"},
          {"max":6, "name": "Images"}
        ]},
        {"max":6, "table":[
          {"max":2, "name": "Mental Blast"},
          {"max":3, "name": "Mind Control"},
          {"max":4, "name": "Mind Shield"},
          {"max":6, "name": "Telepathy"}
        ]}
      ]},
      {"max":5, "name":"Control", "table":[
        {"max":2, "table":[
          {"max":2, "name": "Alteration Ray"},
          {"max":4, "name": "Element Control"},
          {"max":5, "name": "Probability Control"},
          {"max":6, "name": "Time Control"}
        ]},
        {"max":4, "table":[
          {"max":2, "name": "Energy Control"},
          {"max":3, "name": "Healing"},
          {"max":5, "name": "Telekinesis"},
          {"max":6, "name": "Transmutation"}
        ]},
        {"max":6, "table":[
          {"max":1, "name": "Cosmic Power"},
          {"max":3, "name": "Gadgets"},
          {"max":4, "name": "Magic"},
          {"max":5, "name": "Nullification"},
          {"max":6, "name": "Servant"}
        ]}
      ]},
      {"max":6, "name":"Defensive", "table":[
        {"max":2, "table":[
          {"max":2, "name": "Absorption"},
          {"max":3, "name": "Adaptation"},
          {"max":6, "name": "Force Field"}
        ]},
        {"max":4, "table":[
          {"max":1, "name": "Immortality"},
          {"max":4, "name": "Life Support"},
          {"max":6, "name": "Reflection"}
        ]},
        {"max":6, "table":[
          {"max":2, "name": "Regeneration"},
          {"max":6, "name": "Resistance"}
        ]}
      ]},
      {"max":7, "name":"Offensive", "table":[
        {"max":3, "table":[
          {"max":1, "name": "Affliction"},
          {"max":2, "name": "Binding"},
          {"max":3, "name": "Blast"},
          {"max":4, "name": "Strike"}
        ]},
        {"max":6, "table":[
          {"max":1, "name": "Aura"},
          {"max":3, "name": "Dazzle"},
          {"max":4, "name": "Energy Drain"},
          {"max":5, "name": "Fast Attack"},
          {"max":6, "name": "Stunning"}
        ]}
      ]},
      {"max":8, "name":"Movement", "table":[
        {"max":3, "table":[
          {"max":1, "name": "Burrowing"},
          {"max":2, "name": "Dimensional Travel"},
          {"max":4, "name": "Flight"},
          {"max":6, "name": "Leaping"}
        ]},
        {"max":6, "table":[
          {"max":1, "name": "Spinning"},
          {"max":3, "name": "Super-Speed"},
          {"max":4, "name": "Swinging"},
          {"max":5, "name": "Teleportation"},
          {"max":6, "name": "Wall-Crawling"}
        ]}
      ]},
      {"max":10, "name":"Alteration", "table":[
        {"max":2, "table":[
          {"max":1, "name": "Ability Boost"},
          {"max":2, "name": "Ability Increase"},
          {"max":3, "name": "Alter Ego"},
          {"max":4, "name": "Alternate Form"},
          {"max":5, "name": "Aquatic"},
          {"max":6, "name": "Density"}
        ]},
        {"max":4, "table":[
          {"max":1, "name": "Duplication"},
          {"max":2, "name": "Extra Body Parts"},
          {"max":3, "name": "Growth"},
          {"max":4, "name": "Invisibility"},
          {"max":5, "name": "Phasing"},
          {"max":6, "name": "Shrinking"}
        ]},
        {"max":6, "table":[
          {"max":1, "name": "Animal Mimicry"},
          {"max":2, "name": "Material Mimicry"},
          {"max":3, "name": "Plant Mimicry"},
          {"max":4, "name": "Power Mimicry"},
          {"max":5, "name": "Stretching"},
          {"max":6, "name": "Transformation"}
        ]}
      ]},
      {"max":12, "name":"Sensory", "table":[
        {"max":3, "table":[
          {"max":2, "name": "Detection"},
          {"max":3, "name": "ESP"},
          {"max":6, "name": "Super-Senses"}
        ]},
        {"max":6, "table":[
          {"max":2, "name": "Danger Sense"},
          {"max":3, "name": "Interface"},
          {"max":4, "name": "Postcognition"},
          {"max":6, "name": "Precognition"}
        ]}
      ]}
    ],
    "specialities": [
      {"max":1, "table":[
        {"max":1, "name": "Aerial Combat"},
        {"max":2, "name": "Art"},
        {"max":4, "name": "Athletics"},
        {"max":5, "name": "Business"},
        {"max":6, "name": "Drive"}
      ]},
      {"max":2, "table":[
        {"max":2, "name": "Investigation"},
        {"max":3, "name": "Law"},
        {"max":5, "name": "Leadership"},
        {"max":6, "name": "Linguistics"}
      ]},
      {"max":3, "table":[
        {"max":2, "name": "Martial Arts"},
        {"max":3, "name": "Medicine"},
        {"max":5, "name": "Mental Resistance"},
        {"max":6, "name": "Military"}
      ]},
      {"max":4, "table":[
        {"max":1, "name": "Occult"},
        {"max":2, "name": "Performance"},
        {"max":3, "name": "Pilot"},
        {"max":6, "name": "Power"}
      ]},
      {"max":5, "table":[
        {"max":1, "name": "Psychiatry"},
        {"max":3, "name": "Science"},
        {"max":4, "name": "Sleight of Hand"},
        {"max":6, "name": "Stealth"}
      ]},
      {"max":6, "table":[
        {"max":2, "name": "Technology"},
        {"max":3, "name": "Underwater Combat"},
        {"max":5, "name": "Weapons"},
        {"max":6, "name": "Wrestling"}
      ]}
    ]
  }
};
