import { Ok, Result, ValueObject } from "rich-domain";

type Props = {
    value: number;
}

export default class Minute extends ValueObject<Props> {
    private constructor(props: Props) {
        super(props)
    }
    
    public isBetween(min: number, max: number): boolean {
        const value = this.props.value;
        return value > min && value < max;
    }

    public isMultiple(n: number): boolean {
        const value = this.props.value;
        return value % n === 0;
    }

    public static create(props: Props): Result<Minute> {
        return Ok(new Minute(props));
    }
}
