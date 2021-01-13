"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const English_1 = require("./English");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
[
    'London',
    'Birmingham',
    'Liverpool',
    'Leeds',
    'Sheffield',
    'Bristol',
    'Manchester',
    'Leicester',
    'Coventry',
    'Kingston upon Hull',
    'Stoke-on-Trent',
    'Wolverhampton',
    'Nottingham',
    'Plymouth',
    'Southampton',
    'Reading',
    'Derby',
    'Dudley',
    'Newcastle upon Tyne',
    'Northampton',
    'Portsmouth',
    'Luton',
    'Preston',
    'Sunderland',
    'Norwich',
    'Walsall',
    'Bournemouth',
    'Southend-on-Sea',
    'Swindon',
    'Huddersfield',
    'Poole',
    'Oxford',
    'Middlesbrough',
    'Blackpool',
    'Oldbury',
    'Boldon',
    'Ipswich',
    'York',
    'West Bromwich',
    'Peterborough',
    'Stockport',
    'Brighton',
    'Slough',
    'Gloucester',
    'Rotherham',
    'Cambridge',
    'Exeter',
    'Eastbourne',
    'Sutton Coldfield',
    'Blackburn',
    'Colchester',
    'Oldham',
    'St Helens',
    'Woking',
    'Chesterfield',
    'Crawley',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, English_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map