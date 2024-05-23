import { Capability } from "./Capability";
import { CapabilityRangeParameters } from "./Types/CapabilityRangeParameters";
export declare abstract class RangeCapability extends Capability {
    constructor(parameters: CapabilityRangeParameters);
}
