import { Capability } from "./Capability";
import { CapabilityToggleParameters } from "./Types/CapabilityToggleParameters";
export declare abstract class ToggleCapability extends Capability {
    constructor(parameters: CapabilityToggleParameters, retrievable?: boolean, reportable?: boolean);
}
