import { AttributeStateActionResult } from "./AttributeStateActionResult";
export interface AttributeState {
    instance?: string;
    action_result?: AttributeStateActionResult;
    [key: string]: any;
}
