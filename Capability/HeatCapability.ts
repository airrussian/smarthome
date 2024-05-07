import { CapabilityModeParameters } from "./Types/CapabilityModeParameters";
import { Capability } from "./Capability";
import { ModeCapability } from "./ModeCapability";

export class HeatCapability extends ModeCapability {

    static readonly instance = "heat";

    constructor( parameters: CapabilityModeParameters ) {      
        
        parameters = {
            instance: HeatCapability.instance, 
            modes: parameters?.modes
        }
       
        super(parameters, true);              
    }

}

