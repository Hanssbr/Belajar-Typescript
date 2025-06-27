"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const component_1 = __importDefault(require("./component"));
console.log((0, math_1.myMath)(2, 5)); // bisa menggunakan function dari file lain menggunakan import export
console.log((0, component_1.default)());
