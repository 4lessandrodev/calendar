import { Entity, Fail, Ok, Result } from 'rich-domain';
import DateTime from '@domain/date';
import SlotDuration from './slot-duration';

type Props = {
    startDate: DateTime;
    endDate: DateTime;
    slotDuration: SlotDuration;
};
export default class Config extends Entity<Props> {

    private constructor(props: Props) {
        super(props)
    }

    public static isValidProps({ startDate, endDate }: Props): boolean {
        const isGt = endDate.isGt(startDate);
        const diffInDays = endDate.diffInDays(startDate);
        const hasMoreThanOneDay = this.validator.number(diffInDays).isGreaterThan(1);
        return isGt && hasMoreThanOneDay;
    }

    public static create(props: Props): Result<Config> {
        const isValid = this.isValidProps(props);
        const msg = 'Invalid properties: endDate must be greater than startDate and the difference between them must be more than one day.';
        if(!isValid) return Fail(msg);
        return Ok(new Config(props));
    }
};
