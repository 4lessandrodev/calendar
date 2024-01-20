import { Fail, Ok, Result, ValueObject } from "rich-domain";

type Props = {
    value: number;
}

export default class DaysInterval extends ValueObject<Props> {
    private constructor(props: Props) {
        super(props);
    }

    public static isValidProps({ value }: Props): boolean {
        const val = this.validator.number;
        return val(value).isBetweenOrEqual(2, 90);
    }

    public static create(props: Props): Result<DaysInterval> {
        const isValid = this.isValidProps(props);
        if(!isValid) return Fail('Invalid value for days interval. 2-90');
        return Ok(new DaysInterval(props));
    }
}
