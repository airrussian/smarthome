import { Attribute } from "../Attribute";
import { AttributeState } from "../AttributeState";
import { PropertyDescription } from "./Types/PropertyDescription";
import { PropertyState } from "./Types/PropertyState";
export declare abstract class Property extends Attribute {
    getDescription(): PropertyDescription;
    getState(): PropertyState;
    setState(state: AttributeState): void;
}
