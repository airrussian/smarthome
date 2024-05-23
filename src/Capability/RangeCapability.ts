import { AttributeParameters } from "../AttributeParameters";
import { Capability } from "./Capability";
import { CapabilityRangeParameters } from "./Types/CapabilityRangeParameters";

export abstract class RangeCapability extends Capability {
   
    constructor( parameters: CapabilityRangeParameters ) {
        super( "devices.capabilities.range", parameters, true, false );
    }
}