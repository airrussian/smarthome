import { Capability } from "./Capability";
import { HeatCapability } from "./HeatCapability";
import { OnOffCapability } from "./OnOffCapability";
import { PauseCapability } from "./PauseCapability";
import { TemperatureCapability } from "./TemperatureCapability";

export class FactoryCapability { 

    static readonly collectionCapabilities: { [key: string]: Function } = {
        [HeatCapability.instance]: HeatCapability,
        [TemperatureCapability.instance]: TemperatureCapability,
        [PauseCapability.instance]: PauseCapability,
        [OnOffCapability.instance]: OnOffCapability
    }

    static create( instance: string ): Object {                
        const capability = FactoryCapability.collectionCapabilities[ instance ];
        if ( !capability ) 
            throw new Error( `The instance «${instance}» does not exist` );
        return Reflect.construct(capability, []);
    }

}