import Operation, { CalendarConfig } from "@domain/operation";
import TimeLine from "@domain/time-line";
import { ConfigProps } from "@domain/config";

export default class OperationBuilder implements Operation {

    constructor(private config: CalendarConfig) { }

    apply(config: ConfigProps): TimeLine {
        return this.config.applyConfig(config);
    }

    change(config: CalendarConfig): Operation {
        this.config = config;
        return this;
    }
}
