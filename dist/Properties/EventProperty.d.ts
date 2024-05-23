import { AttributeParameters } from "../AttributeParameters";
import { Property } from "./Property";
export declare class EventProperty extends Property {
    static readonly type = "devices.properties.event";
    constructor(parameters: AttributeParameters, retrievable?: boolean, reportable?: boolean);
}
