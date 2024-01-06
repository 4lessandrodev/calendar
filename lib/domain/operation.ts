import TimeLine from "@domain/time-line";
import Config from "@domain/config";

export type CalendarConfigProps = {
    startAt: string; // hh:mm
    endsAt: string; // hh:mm
}

export abstract class CalendarConfig {
    abstract applyConfig(params: CalendarConfigProps, config: Config): TimeLine;
}

export default abstract class Operation {
    abstract apply(params: CalendarConfigProps, config: Config): TimeLine;
    abstract change(config: CalendarConfig): Operation;
};
