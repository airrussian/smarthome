import { AttributeParameters } from "../../AttributeParameters";
export interface CapabilityModeParametersObject {
    value: string;
}
export interface CapabilityModeParameters extends AttributeParameters {
    modes: CapabilityModeParametersObject[];
}
