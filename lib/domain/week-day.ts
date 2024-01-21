import { ValueObject, Result, Ok } from "rich-domain";

type Props = {
    value: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export default class WeekDay extends ValueObject<Props> {
    private readonly days = {
        0: 'SUNDAY',
        1: 'MONDAY',
        2: 'TUESDAY',
        3: 'WEDNESDAY',
        4: 'THURSDAY',
        5: 'FRIDAY',
        6: 'SATURDAY'
    } as const;

    private constructor(props: Props) {
        super(props);
    }

    hasSomeWeekDay(weekDays: WeekDay[]): boolean {
        return weekDays.some((wk): boolean => wk.getDayName() === this.getDayName());
    }

    isWeekend(): boolean {
        const compare = this.validator.number;
        const current = compare(this.props.value);
        return current.isEqualTo(0) || current.isEqualTo(6);
    }

    getDayName() {
        return this.days?.[this.props.value];
    }

    isEq(day: number): boolean {
        return this.validator.number(day).isEqualTo(this.props.value);
    }

    public static isValidProps({ value }: Props): boolean {
        return this.validator.number(value).isBetweenOrEqual(0, 6);
    }

    public static create(props: Props): Result<WeekDay> {
        return Ok(new WeekDay(props));
    }
}
