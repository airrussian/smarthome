import { Capability } from "./Capability";
export declare class OnOffCapability extends Capability {
    static readonly instance = "on";
    constructor(split?: boolean);
}
