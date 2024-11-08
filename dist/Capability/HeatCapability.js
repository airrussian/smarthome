"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeatCapability = void 0;
const ModeCapability_1 = require("./ModeCapability");
class HeatCapability extends ModeCapability_1.ModeCapability {
    constructor(modes) {
        const parameters = {
            instance: HeatCapability.instance,
            modes: modes
        };
        super(parameters, true);
    }
}
exports.HeatCapability = HeatCapability;
HeatCapability.instance = "heat";
