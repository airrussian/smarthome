import { Attribute } from "../Attribute"
import { AttributeState } from "../AttributeState"
import { CapabilityDescription } from "./Types/CapabilityDescription"
import { CapabilityState } from "./Types/CapabilityState"

export abstract class Capability extends Attribute {

    getDescription(): CapabilityDescription {
        return { 
            type: this.type, 
            retrievable: this.retrievable, 
            reportable: this.reportable,
            parameters: this.parameters,
        }
    }

    getState(): CapabilityState {                
        return {
            type: this.type,
            state: this.state
        }
    }

    setState(state: AttributeState): void {
        const instance = this.state.instance;
        state.instance = instance;
        this.state = state;
    }

}