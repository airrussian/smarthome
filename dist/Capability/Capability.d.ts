import { Attribute } from "../Attribute";
import { AttributeState } from "../AttributeState";
import { CapabilityDescription } from "./Types/CapabilityDescription";
import { CapabilityState } from "./Types/CapabilityState";
export declare abstract class Capability extends Attribute {
    getDescription(): CapabilityDescription;
    getState(): CapabilityState;
    setState(state: AttributeState): void;
}
