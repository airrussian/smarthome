"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventProperty = void 0;
const Property_1 = require("./Property");
class EventProperty extends Property_1.Property {
    constructor(parameters, retrievable = true, reportable = false) {
        super(EventProperty.type, parameters, retrievable, reportable);
    }
}
exports.EventProperty = EventProperty;
EventProperty.type = "devices.properties.event";
