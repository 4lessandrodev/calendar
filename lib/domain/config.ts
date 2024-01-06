import { Entity, Fail, Ok, Result } from 'rich-domain';
import DateTime from '@domain/date';
import SlotDuration from '@domain/slot-duration';
import Operation from '@domain/operation';

type Props = {
    startDate: DateTime;
    endDate: DateTime;
    slotDuration: SlotDuration;
    operation: Operation;
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
