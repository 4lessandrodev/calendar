import { Entity, Fail, Ok, Result } from 'rich-domain';
import DateTime from '@domain/date';
import SlotDuration from '@domain/slot-duration';
import Time from '@domain/time';
import WeekDay from '@domain/week-day';

type PeriodProps = {
    startAt: Time; // hh:mm
    endsAt: Time; // hh:mm
    onDaysInterval: number; // a cada 15/30 dias
    everyWeekDays: WeekDay[] // dias da semana (0-6) 0: dom - 6: sab
}

type Props = {
    startDate: DateTime;
    endDate: DateTime;
    slotDuration: SlotDuration;
    period: PeriodProps;
};

export default class Config extends Entity<Props> {

    private constructor(props: Props) {
        super(props)
    }

    public static isValidProps({ startDate, endDate }: Props): boolean {
        const diffInDays = endDate.diffInDays(startDate);
        const hasMoreThanOneDay = this.validator.number(diffInDays).isGreaterThan(1);
        return hasMoreThanOneDay;
    }

    public static create(props: Props): Result<Config> {
        const isValid = this.isValidProps(props);
        const msg = 'The difference between startDate and endDate must be more than one day.';
        if(!isValid) return Fail(msg);
        return Ok(new Config(props));
    }
};
