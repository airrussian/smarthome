"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeCapability = void 0;
const Capability_1 = require("./Capability");
class ModeCapability extends Capability_1.Capability {
    constructor(parameters, retrievable = false, reportable = false) {
        super("devices.capabilities.mode", parameters, retrievable, reportable);
    }
}
exports.ModeCapability = ModeCapability;
