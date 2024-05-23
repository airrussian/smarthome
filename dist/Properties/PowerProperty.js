"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerProperty = void 0;
const FloatProperty_1 = require("./FloatProperty");
class PowerProperty extends FloatProperty_1.FloatProperty {
    constructor(parameters) {
        parameters.instance = PowerProperty.instance;
        super(parameters, true, false);
    }
}
exports.PowerProperty = PowerProperty;
PowerProperty.instance = "power";
/**
 * Единицы измерения значений функции.
 */
PowerProperty.Unit = {
    /**
     * измеряется в ваттах.
     */
    W: "unit.watt",
};
