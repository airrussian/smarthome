import { AttributeParameters } from "../AttributeParameters";
import { FloatProperty } from "./FloatProperty";
import { Property } from "./Property";
import { PropertyState } from "./Types/PropertyState";

export class PressureProperty extends FloatProperty {

    static readonly instance = "pressure";

    /**
     * Единицы измерения отображение давления
     */
    static readonly Unit = {
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
    }

    constructor(parameters: AttributeParameters) {        
        parameters.instance = PressureProperty.instance;
        super(parameters, true, false);
    }

}