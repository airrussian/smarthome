export type ResponseActionDeviceCapabilityStateActionResult = {
    status: "DONE" | "ERROR",
    error_code?: string,
    error_message?: string
}

export type ResponseActionDeviceCapability = {
    type: string;
    state: {
        instance: string;
        value?: number | string;
        action_result: ResponseActionDeviceCapabilityStateActionResult;        
    }
}

export type ResponseActionDevice = {
    id: string,
    capabilities?: ResponseActionDeviceCapability[],
    action_result?: {
        status: "ERROR",
        error_code: string
    }
}

export type ResponseActionDevices = {
    devices: ResponseActionDevice[]
}