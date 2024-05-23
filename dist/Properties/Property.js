"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const Attribute_1 = require("../Attribute");
class Property extends Attribute_1.Attribute {
    getDescription() {
        return {
            type: this.type,
            retrievable: this.retrievable,
            reportable: this.reportable,
            parameters: this.parameters,
        };
    }
    getState() {
        return {
            type: this.type,
            state: this.state
        };
    }
    setState(state) {
        const instance = this.state.instance;
        state.instance = instance;
        this.state = state;
    }
}
exports.Property = Property;
