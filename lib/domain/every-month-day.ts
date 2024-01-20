import { Fail, Ok, Result, ValueObject } from "rich-domain";

type Props = {
    value: number;
}

export default class EveryMonthDay extends ValueObject<Props> {
    private constructor(props: Props) {
        super(props);
    }

    public isLastDay(): boolean {
        return this.validator.number(this.props.value).isEqualTo(31);
    }

    public static isValidProps({ value }: Props): boolean {
        const val = this.validator.number;
        return val(value).isBetweenOrEqual(1, 31);
    }

    public static create(props: Props): Result<EveryMonthDay> {
        const isValid = this.isValidProps(props);
        if(!isValid) return Fail('Invalid value month days. 1-31');
        return Ok(new EveryMonthDay(props));
    }
}
