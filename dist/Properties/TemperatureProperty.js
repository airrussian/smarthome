"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureProperty = void 0;
const FloatProperty_1 = require("./FloatProperty");
class TemperatureProperty extends FloatProperty_1.FloatProperty {
    constructor(parameters) {
        parameters.instance = TemperatureProperty.instance;
        super(parameters, true, false);
    }
}
exports.TemperatureProperty = TemperatureProperty;
TemperatureProperty.instance = "temperature";
/**
 * Единицы измерения температуры
 */
TemperatureProperty.Unit = {
    /**
     * Температура в градусах Цельсия.
     */
    C: "unit.temperature.celsius",
    /**
     * Температура в градусах Кельвина.
     */
    K: "unit.temperature.kelvin"
};
