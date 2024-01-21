import { Entity, Fail, Ok, Result } from 'rich-domain';
import DateTime from '@domain/date';
import SlotDuration from '@domain/slot-duration';
import Time from '@domain/time';
import WeekDay from '@domain/week-day';
import EveryMonthDay from '@domain/every-month-day';
import DaysInterval from '@domain/days-interval';

export type PeriodProps = {
    startAt: Time; // hh:mm
    endsAt: Time; // hh:mm
    everyMonthDay: EveryMonthDay | null; // ex: todo dia 15 de cada mês
    daysInterval: DaysInterval | null; // ex: a cada 15/30 dias
    weekDays: WeekDay[]; // ex: dias da semana (0-6) 0: dom - 6: sab
}

export type ConfigProps = {
    startDate: DateTime;
    endDate: DateTime;
    slotDuration: SlotDuration;
    period: PeriodProps;
};

export default class Config extends Entity<ConfigProps> {

    private constructor(props: ConfigProps) {
        super(props)
    }

    isConfigByMonthDay(): boolean {
        return !!this.props.period.everyMonthDay;
    }

    isConfigByDaysInterval(): boolean {
        return !!this.props.period.daysInterval;
    }

    isConfigByWeekDays(): boolean {
        return this.props.period.weekDays.length > 0;
    }

    hasSomeConfig(): boolean {
        return (
            this.isConfigByMonthDay() ||
            this.isConfigByDaysInterval() ||
            this.isConfigByWeekDays()
        )
    }

    public static isValidProps({ startDate, endDate }: ConfigProps): boolean {
        const diffInDays = endDate.diffInDays(startDate);
        const hasMoreThanOneDay = this.validator.number(diffInDays).isGreaterThan(1);
        return hasMoreThanOneDay;
    }

    public static create(props: ConfigProps): Result<Config> {
        const isValid = this.isValidProps(props);
        const msg = 'The difference between startDate and endDate must be more than one day.';
        if (!isValid) return Fail(msg);
        const config = new Config(props);
        const hasConfig = config.hasSomeConfig();
        if (!hasConfig) return Fail('None valid config provided');
        return Ok(config);
    }
};
