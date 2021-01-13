"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const English_1 = require("./English");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'English',
    nation: 'England',
    colors: ['#fd5dfc', '#832317', '#fff'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(English_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map