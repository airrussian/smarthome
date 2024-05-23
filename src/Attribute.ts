import { AttributeParameters } from "./AttributeParameters";
import { AttributeState } from "./AttributeState";
import { AttributeStateActionResult } from "./AttributeStateActionResult";

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
        if ( state.instance === undefined ) state.instance = this.state.instance;
        this.state = state;
    }

    setActionSuccess() {
        this.state.action_result = { status: "DONE" } as AttributeStateActionResult;
    }

    setActionError( error_code = "INVALID_ACTION", error_message = "" ) {
        this.state.action_result = { status: "ERROR", error_code, error_message } as AttributeStateActionResult;
    }

    compare( attribute: any ): boolean {
        return ( this.type === attribute.type ) && ( this.state.instance === attribute.state.instance );
    }

}