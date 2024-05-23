"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeCapability = void 0;
const Capability_1 = require("./Capability");
class RangeCapability extends Capability_1.Capability {
    constructor(parameters) {
        super("devices.capabilities.range", parameters, true, false);
    }
}
exports.RangeCapability = RangeCapability;
