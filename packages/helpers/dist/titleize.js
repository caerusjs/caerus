"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleize = void 0;
const title_case_1 = require("title-case");
exports.titleize = (name) => title_case_1.titleCase(name).replace('-', '');
//# sourceMappingURL=titleize.js.map