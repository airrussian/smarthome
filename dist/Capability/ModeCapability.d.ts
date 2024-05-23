import { Capability } from "./Capability";
import { CapabilityModeParameters } from "./Types/CapabilityModeParameters";
export declare abstract class ModeCapability extends Capability {
    constructor(parameters: CapabilityModeParameters, retrievable?: boolean, reportable?: boolean);
}
