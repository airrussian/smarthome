import { AttributeParameters } from "../AttributeParameters";
import { FloatProperty } from "./FloatProperty";
export declare class TemperatureProperty extends FloatProperty {
    static readonly instance = "temperature";
    /**
     * Единицы измерения температуры
     */
    static readonly Unit: {
        /**
         * Температура в градусах Цельсия.
         */
        C: string;
        /**
         * Температура в градусах Кельвина.
         */
        K: string;
    };
    constructor(parameters: AttributeParameters);
}
