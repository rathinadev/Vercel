"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getAllFiles = (folderPath) => {
    let response = [];
    const allfilesandfolders = fs_1.default.readdirSync(folderPath);
    allfilesandfolders.forEach(file => {
        const fullfilepath = path_1.default.join(folderPath, file);
        if (fs_1.default.statSync(fullfilepath).isDirectory()) {
            response = response.concat((0, exports.getAllFiles)(fullfilepath));
        }
        {
            response.push(fullfilepath);
        }
    });
    return response;
};
exports.getAllFiles = getAllFiles;
