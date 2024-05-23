import { AttributeParameters } from "./AttributeParameters";
import { AttributeState } from "./AttributeState";
export declare abstract class Attribute {
    protected type: string;
    protected parameters: AttributeParameters;
    protected retrievable: boolean;
    protected reportable: boolean;
    protected state: AttributeState;
    constructor(type: string, parameters?: AttributeParameters, retrievable?: boolean, reportable?: boolean, state?: AttributeState);
    setState(state: AttributeState): void;
    setActionSuccess(): void;
    setActionError(error_code?: string, error_message?: string): void;
    compare(attribute: any): boolean;
}
