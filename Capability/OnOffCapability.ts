import { Capability } from "./Capability";

export class OnOffCapability extends Capability {   

    static readonly instance = "on";

    constructor( split: boolean = false ) {
        const parameters = { 
            instance: OnOffCapability.instance,
            split
        }
        super( "devices.capabilities.on_off", parameters, true, false );
    }
    
}