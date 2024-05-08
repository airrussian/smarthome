import { Capability as _Capability } from "./Capability/Capability";
import { HeatCapability as _HeatCapability } from "./Capability/HeatCapability";
import { PauseCapability as _PauseCapability } from "./Capability/PauseCapability";
import { OnOffCapability as _OnOffCapability } from "./Capability/OnOffCapability";
import { TemperatureCapability as _TemperatureCapability } from "./Capability/TemperatureCapability";

import { CapabilityDescription as _CapabilityDescription } from "./Capability/Types/CapabilityDescription";
import { RangeObject as _RangeObject } from "./Capability/Types/Range";
import { CapabilityState as _CapabilityState } from "./Capability/Types/CapabilityState";
import { FactoryCapability as _FactoryCapability } from "../forExperiments/expDescRest/Devices/DataView/FactoryCapability";

import { Property as _Property } from "./Properties/Property";
import { PropertyState as _PropertyState } from "./Properties/Types/PropertyState";
import { PropertyDescription as _PropertyDescription } from "./Properties/Types/PropertyDescription";
import { PressureProperty as _PressureProperty } from "./Properties/PressureProperty";
import { TemperatureProperty as _TemperatureProperty } from "./Properties/TemperatureProperty";

import { Device as _Device } from "./Device"; 

export namespace SmartHome {

    export type Device = _Device;

    export type Capability = _Capability;
    export type CapabilityDescription = _CapabilityDescription;
    export type CapabilityState = _CapabilityState;
    export type HeatCapability = _HeatCapability;
    export type OnOffCapability = _OnOffCapability;
    export type TemperatureCapability = _TemperatureCapability;
    export type PauseCapability = _PauseCapability;
    export type RangeObject = _RangeObject;

    export const FactoryCapability = _FactoryCapability;

    export const Capability = _Capability;
    export const HeatCapability = _HeatCapability;
    export const OnOffCapability = _OnOffCapability;
    export const TemperatureCapability = _TemperatureCapability;
    export const PauseCapability = _PauseCapability;
    
    export type Property = _Property;
    export type PropertyState = _PropertyState;
    export type PropertyDescription = _PropertyDescription;
    export type PressureProperty = _PressureProperty;
    export type TemperatureProperty = _TemperatureProperty;

    export const Property = _Property;
    export const PressureProperty = _PressureProperty;
    export const TemperatureProperty = _TemperatureProperty;

}