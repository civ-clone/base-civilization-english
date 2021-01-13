"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonChurchill = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const English_1 = require("../English");
class WinstonChurchill extends Leader_1.default {
    static civilization() {
        return English_1.default;
    }
    name() {
        return 'Winston Churchill';
    }
}
exports.WinstonChurchill = WinstonChurchill;
exports.default = WinstonChurchill;
//# sourceMappingURL=WinstonChurchill.js.map