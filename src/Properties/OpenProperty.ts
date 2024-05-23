import { AttributeParameters } from "../AttributeParameters";
import { EventProperty } from "./EventProperty";

export class OpenProperty extends EventProperty {

    static readonly instance = "open";

    constructor( parameters: AttributeParameters ) {

        parameters.instance = OpenProperty.instance;

        super(parameters, true, false);
    }
}