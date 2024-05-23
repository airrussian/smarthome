"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureCapability = void 0;
const RangeCapability_1 = require("./RangeCapability");
class TemperatureCapability extends RangeCapability_1.RangeCapability {
    constructor(range, random_access = true, unit = TemperatureCapability.unit) {
        const parameters = {
            instance: TemperatureCapability.instance, unit, random_access, range
        };
        super(parameters);
    }
}
exports.TemperatureCapability = TemperatureCapability;
TemperatureCapability.instance = "temperature";
TemperatureCapability.unit = "unit.temperature.celsius";
