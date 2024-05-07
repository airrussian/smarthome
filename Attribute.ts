import { AttributeParameters } from "./AttributeParameters";
import { AttributeState } from "./AttributeState";

export abstract class Attribute {

    constructor( 
        protected type: string, 
        protected parameters: AttributeParameters = {}, 
        protected retrievable: boolean = false, 
        protected reportable: boolean = false,
        protected state: AttributeState = {}
    ) {
        this.state.instance = parameters.instance;  
    }

    setState( state: AttributeState ) {
        this.state = state;
    }

    compare( attribute: any ): boolean {
        return ( this.type === attribute.type ) && ( this.state.instance === attribute.state.instance );
    }

}