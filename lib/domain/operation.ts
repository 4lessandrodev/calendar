import TimeLine from "@domain/time-line";
import Config from "@domain/config";
import Time from "./time";

export type CalendarConfigProps = {
    startAt: Time; // hh:mm
    endsAt: Time; // hh:mm
    daysInterval: number; // a cada 15/30 dias
    weekDays: number[] // dias da semana (0-6) 0: dom - 6: sab
}

export abstract class CalendarConfig {
    abstract applyConfig(params: CalendarConfigProps, config: Config): TimeLine;
}

export default abstract class Operation {
    abstract apply(params: CalendarConfigProps, config: Config): TimeLine;
    abstract change(config: CalendarConfig): Operation;
};
