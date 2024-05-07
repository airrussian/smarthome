import { ToggleCapability } from "./ToggleCapability";

export class PauseCapability extends ToggleCapability {   

    static readonly instance = "pause";

    constructor() {
        const parameters = { instance: PauseCapability.instance }
        super( parameters, true, false );
    }
    
}