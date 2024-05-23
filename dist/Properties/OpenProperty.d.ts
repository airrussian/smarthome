import { AttributeParameters } from "../AttributeParameters";
import { EventProperty } from "./EventProperty";
export declare class OpenProperty extends EventProperty {
    static readonly instance = "open";
    constructor(parameters: AttributeParameters);
}
