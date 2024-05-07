import { Capability } from "./Capability";
import { CapabilityToggleParameters } from "./Types/CapabilityToggleParameters";

export abstract class ToggleCapability extends Capability {
   
    constructor( parameters: CapabilityToggleParameters, retrievable: boolean = true, reportable: boolean = false ) {
        super( "devices.capabilities.toggle", parameters, retrievable, reportable );
    }
}