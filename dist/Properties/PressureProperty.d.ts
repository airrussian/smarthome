import { AttributeParameters } from "../AttributeParameters";
import { FloatProperty } from "./FloatProperty";
export declare class PressureProperty extends FloatProperty {
    static readonly instance = "pressure";
    /**
     * Единицы измерения отображение давления
     */
    static readonly Unit: {
        /**
         * измеряется в атмосферах
         */
        ATM: string;
        /**
         * измеряется в паскалях
         */
        PASCAL: string;
        /**
         * измеряется в барах
         */
        BAR: string;
        /**
         * измеряется в миллиметрах ртутного столба
         */
        MMHG: string;
    };
    constructor(parameters: AttributeParameters);
}
