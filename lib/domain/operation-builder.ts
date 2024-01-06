import Operation, { CalendarConfig } from "@domain/operation";
import { CalendarConfigProps } from "@domain/operation";
import TimeLine from "@domain/time-line";
import Config from "@domain/config";

export default class OperationBuilder implements Operation {

    constructor(private config: CalendarConfig) { }

    apply(params: CalendarConfigProps, config: Config): TimeLine {
        return this.config.applyConfig(params, config);
    }

    change(config: CalendarConfig): Operation {
        this.config = config;
        return this;
    }
}
