import TimeLine from "@domain/time-line";
import { ConfigProps } from "@domain/config";

export abstract class CalendarConfig {
    abstract applyConfig(params: ConfigProps): TimeLine;
}

export default abstract class Operation {
    abstract apply(props: ConfigProps): TimeLine;
    abstract change(config: CalendarConfig): Operation;
};
