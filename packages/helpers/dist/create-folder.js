"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFolder = void 0;
const fs_1 = __importDefault(require("fs"));
exports.createFolder = (folderPath) => {
    fs_1.default.mkdirSync(folderPath, { recursive: true });
};
//# sourceMappingURL=create-folder.js.map