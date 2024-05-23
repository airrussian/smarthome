"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatProperty = void 0;
const Property_1 = require("./Property");
class FloatProperty extends Property_1.Property {
    constructor(parameters, retrievable = true, reportable = false) {
        super(FloatProperty.type, parameters, retrievable, reportable);
    }
}
exports.FloatProperty = FloatProperty;
FloatProperty.type = "devices.properties.float";
