"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = void 0;
const fs_1 = __importDefault(require("fs"));
const create_folder_1 = require("./create-folder");
exports.createFile = (path, fileName, contents) => {
    create_folder_1.createFolder(path);
    fs_1.default.writeFileSync(`${path}${fileName}`, contents);
    console.log(`Created file ${path}${fileName}`);
};
//# sourceMappingURL=create-file.js.map