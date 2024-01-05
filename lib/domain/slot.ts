import { Fail, Ok, Result, ValueObject } from "rich-domain";

type Props = {
    start: string; // 08:30
    end: string; // 08:45
}

export default class Slot extends ValueObject<Props> {

    private static readonly regex: RegExp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/; // hh:mm

    private constructor(props: Props){
        super(props);
    }

    public static isValidProps({ start, end }: Props): boolean {
        const isValidStart = this.validator.string(start).match(this.regex);
        const isValidEnd = this.validator.string(end).match(this.regex);
        const isEndGt = end > start;
        return isEndGt && isValidEnd && isValidStart;
    }

    public static create(props: Props): Result<Slot> {
        const isValid = this.isValidProps(props);
        if(!isValid) return Fail('Invalid values for slot');
        return Ok(new Slot(props));
    }
}
