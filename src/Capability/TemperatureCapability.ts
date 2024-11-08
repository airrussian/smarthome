import { RangeCapability } from "./RangeCapability";
import { CapabilityRangeParameters } from "./Types/CapabilityRangeParameters";
import { RangeObject } from "./Types/Range";

export class TemperatureCapability extends RangeCapability {

    static readonly instance = "temperature";

    static readonly unit = "unit.temperature.celsius";

    constructor( range: Partial<RangeObject>, random_access: boolean = true, unit: string = TemperatureCapability.unit ) {

        const parameters: CapabilityRangeParameters = {
            instance: TemperatureCapability.instance, unit, random_access, range
        }
        
        super( parameters );
    }
}