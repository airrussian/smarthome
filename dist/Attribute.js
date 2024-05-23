"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = void 0;
class Attribute {
    constructor(type, parameters = {}, retrievable = false, reportable = false, state = {}) {
        this.type = type;
        this.parameters = parameters;
        this.retrievable = retrievable;
        this.reportable = reportable;
        this.state = state;
        this.state.instance = parameters.instance;
    }
    setState(state) {
        if (state.instance === undefined)
            state.instance = this.state.instance;
        this.state = state;
    }
    setActionSuccess() {
        this.state.action_result = { status: "DONE" };
    }
    setActionError(error_code = "INVALID_ACTION", error_message = "") {
        this.state.action_result = { status: "ERROR", error_code, error_message };
    }
    compare(attribute) {
        return (this.type === attribute.type) && (this.state.instance === attribute.state.instance);
    }
}
exports.Attribute = Attribute;
