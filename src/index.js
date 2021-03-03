"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCurrency = void 0;
//@ts-ignore
var number_to_text_1 = __importDefault(require("number-to-text"));
var getDecimal = function (value) {
    var decimal = value % 1;
    var a_decimal = decimal.toString().split(".");
    a_decimal.shift();
    decimal = parseInt(a_decimal.join());
    if (a_decimal.length < 2) {
        decimal = decimal * 10;
    }
    return decimal;
};
var convertCurrency = function (value) {
    var tr = require("number-to-text/converters/tr");
    var config = { language: "tr", case: "titleCase" };
    var decimal = getDecimal(value);
    var integer = value - (value % 1);
    var txtInteger = number_to_text_1.default.convertToText(integer, config);
    var txtDecimal = "";
    if (decimal > 0) {
        txtDecimal = number_to_text_1.default.convertToText(decimal, config);
        txtDecimal += "Kuruş";
    }
    txtInteger += "TürkLirası" + txtDecimal;
    txtInteger = txtInteger.replace(/[\s,]/g, "");
    return txtInteger;
};
exports.convertCurrency = convertCurrency;
