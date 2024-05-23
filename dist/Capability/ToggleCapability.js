"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleCapability = void 0;
const Capability_1 = require("./Capability");
class ToggleCapability extends Capability_1.Capability {
    constructor(parameters, retrievable = true, reportable = false) {
        super("devices.capabilities.toggle", parameters, retrievable, reportable);
    }
}
exports.ToggleCapability = ToggleCapability;
