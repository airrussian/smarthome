import { Capability } from "./Capability/Capability";
import { Property } from "./Properties/Property";
export type DeviceInfo = {
    manufacturer?: string;
    model?: string;
    hw_version?: string;
    sw_version?: string;
};
export type Device = {
    id: string;
    name?: string;
    description?: string;
    room?: string;
    type?: string;
    custom_datas?: Object;
    capabilities?: Capability[];
    property?: Property[];
    device_info?: DeviceInfo;
};
