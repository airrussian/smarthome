import { RangeCapability } from "./RangeCapability";
import { RangeObject } from "./Types/Range";
export declare class TemperatureCapability extends RangeCapability {
    static readonly instance = "temperature";
    static readonly unit = "unit.temperature.celsius";
    constructor(range: Partial<RangeObject>, random_access?: boolean, unit?: string);
}
