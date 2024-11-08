import { CapabilityModeParametersObject } from "./Types/CapabilityModeParameters";
import { ModeCapability } from "./ModeCapability";

export class HeatCapability extends ModeCapability {

    static readonly instance = "heat";

    constructor( modes: CapabilityModeParametersObject[] ) {      
        
        const parameters = {
            instance: HeatCapability.instance, 
            modes: modes
        }
       
        super(parameters, true);              
    }

}

