import { CapabilityModeParametersObject } from "./Types/CapabilityModeParameters";
import { ModeCapability } from "./ModeCapability";
export declare class HeatCapability extends ModeCapability {
    static readonly instance = "heat";
    constructor(modes: CapabilityModeParametersObject[]);
}
