import { AttributeParameters } from "../AttributeParameters";
import { Property } from "./Property";

export class EventProperty extends Property {

    static readonly type = "devices.properties.event";

    constructor(parameters: AttributeParameters, retrievable: boolean = true, reportable: boolean = false ) {
        super(EventProperty.type, parameters, retrievable, reportable );
    }
}