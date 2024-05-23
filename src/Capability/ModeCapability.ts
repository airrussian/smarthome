import { Capability } from "./Capability";
import { CapabilityModeParameters } from "./Types/CapabilityModeParameters";

export abstract class ModeCapability extends Capability {
   
    constructor( parameters: CapabilityModeParameters, retrievable: boolean = false, reportable: boolean = false ) {
        super( "devices.capabilities.mode", parameters, retrievable, reportable );
    }
}