import { AttributeParameters } from "../AttributeParameters";
import { Property } from "./Property";
export declare class FloatProperty extends Property {
    static readonly type = "devices.properties.float";
    constructor(parameters: AttributeParameters, retrievable?: boolean, reportable?: boolean);
}
