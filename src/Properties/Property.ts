import { Attribute } from "../Attribute";
import { AttributeState } from "../AttributeState";
import { PropertyDescription } from "./Types/PropertyDescription";
import { PropertyState } from "./Types/PropertyState";

export abstract class Property extends Attribute {

    getDescription(): PropertyDescription {
        return { 
            type: this.type, 
            retrievable: this.retrievable, 
            reportable: this.reportable,
            parameters: this.parameters,
        }
    }

    getState(): PropertyState {
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