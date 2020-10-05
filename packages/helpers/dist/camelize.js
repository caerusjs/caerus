"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelize = void 0;
exports.camelize = (name) => {
    return name
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
        .replace(/-/g, '');
};
//# sourceMappingURL=camelize.js.map