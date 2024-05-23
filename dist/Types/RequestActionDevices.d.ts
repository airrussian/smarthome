export type RequestActionDeviceCapability = {
    type: string;
    state: {
        instance: string;
        value: number | string;
        relative?: boolean;
    };
};
export type RequestActionDevice = {
    id: string;
    capabilities: RequestActionDeviceCapability[];
};
export type RequestActionDevices = {
    devices: RequestActionDevice[];
};
