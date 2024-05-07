import { AttributeParameters } from "../AttributeParameters";
import { FloatProperty } from "./FloatProperty";

export class TemperatureProperty extends FloatProperty {

    static readonly instance = "temperature";

    /**
     * Единицы измерения температуры
     */
    static readonly Unit = {
        /**
         * Температура в градусах Цельсия.
         */
        C: "unit.temperature.celsius",

        /**
         * Температура в градусах Кельвина.
         */
        K: "unit.temperature.kelvin"
    }

    constructor( parameters: AttributeParameters ) {

        parameters.instance = TemperatureProperty.instance;

        super(parameters, true, false );
    }
}