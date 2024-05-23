import { AttributeParameters } from "../AttributeParameters";
import { FloatProperty } from "./FloatProperty";
export declare class PowerProperty extends FloatProperty {
    static readonly instance = "power";
    /**
     * Единицы измерения значений функции.
     */
    static readonly Unit: {
        /**
         * измеряется в ваттах.
         */
        W: string;
    };
    constructor(parameters: AttributeParameters);
}
