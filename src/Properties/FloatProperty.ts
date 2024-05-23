import { AttributeParameters } from "../AttributeParameters";
import { Property } from "./Property";

export class FloatProperty extends Property {

    static readonly type = "devices.properties.float";

    constructor(parameters: AttributeParameters, retrievable: boolean = true, reportable: boolean = false ) {
        super(FloatProperty.type, parameters, retrievable, reportable );
    }
}