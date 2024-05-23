import { AttributeParameters } from "../AttributeParameters";
import { FloatProperty } from "./FloatProperty";

export class PowerProperty extends FloatProperty {

    static readonly instance = "power";

    /**
     * Единицы измерения значений функции.
     */
    static readonly Unit = {
        /**
         * измеряется в ваттах.
         */
        W: "unit.watt",

    }

    constructor( parameters: AttributeParameters ) {

        parameters.instance = PowerProperty.instance;

        super(parameters, true, false);
    }
}