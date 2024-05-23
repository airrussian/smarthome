"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenProperty = void 0;
const EventProperty_1 = require("./EventProperty");
class OpenProperty extends EventProperty_1.EventProperty {
    constructor(parameters) {
        parameters.instance = OpenProperty.instance;
        super(parameters, true, false);
    }
}
exports.OpenProperty = OpenProperty;
OpenProperty.instance = "open";
