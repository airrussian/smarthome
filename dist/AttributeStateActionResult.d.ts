export type AttributeStateActionResult = {
    status: "DONE" | "ERROR";
    error_code: string;
    error_message: string;
};
