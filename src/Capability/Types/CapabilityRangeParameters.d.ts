import { AttributeParameters } from "../../AttributeParameters";
import { RangeObject } from "./Range";
export interface CapabilityRangeParameters extends AttributeParameters {
    unit: string;
    random_access: boolean;
    range: Partial<RangeObject>;
}
