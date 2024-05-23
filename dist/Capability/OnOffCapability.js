"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnOffCapability = void 0;
const Capability_1 = require("./Capability");
class OnOffCapability extends Capability_1.Capability {
    constructor(split = false) {
        const parameters = {
            instance: OnOffCapability.instance,
            split
        };
        super("devices.capabilities.on_off", parameters, true, false);
    }
}
exports.OnOffCapability = OnOffCapability;
OnOffCapability.instance = "on";
