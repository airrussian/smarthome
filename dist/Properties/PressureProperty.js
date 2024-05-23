"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PressureProperty = void 0;
const FloatProperty_1 = require("./FloatProperty");
class PressureProperty extends FloatProperty_1.FloatProperty {
    constructor(parameters) {
        parameters.instance = PressureProperty.instance;
        super(parameters, true, false);
    }
}
exports.PressureProperty = PressureProperty;
PressureProperty.instance = "pressure";
/**
 * Единицы измерения отображение давления
 */
PressureProperty.Unit = {
    /**
     * измеряется в атмосферах
     */
    ATM: "unit.pressure.atm",
    /**
     * измеряется в паскалях
     */
    PASCAL: "unit.pressure.pascal",
    /**
     * измеряется в барах
     */
    BAR: "unit.pressure.bar",
    /**
     * измеряется в миллиметрах ртутного столба
     */
    MMHG: "unit.pressure.mmhg"
};
