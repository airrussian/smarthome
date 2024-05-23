"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PauseCapability = void 0;
const ToggleCapability_1 = require("./ToggleCapability");
class PauseCapability extends ToggleCapability_1.ToggleCapability {
    constructor() {
        const parameters = { instance: PauseCapability.instance };
        super(parameters, true, false);
    }
}
exports.PauseCapability = PauseCapability;
PauseCapability.instance = "pause";
