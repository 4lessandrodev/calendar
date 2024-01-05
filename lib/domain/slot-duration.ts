import { Fail, Ok, Result, ValueObject } from "rich-domain";
import Minute from "./minute";

type Props = {
    minutes: Minute;
}

export default class SlotDuration extends ValueObject<Props> {

    private static minDuration: number = 4;
    private static maxDuration: number = 61;
    private static multiple: number = 5;

    private constructor(props: Props) {
        super(props)
    }

    public static isValidProps({ minutes }: Props): boolean {
        const min = this.minDuration;
        const max = this.maxDuration;
        const multiple = this.multiple;
        const isMultiple = minutes.isMultiple(multiple);
        return minutes && isMultiple && minutes.isBetween(min, max);
    }

    public static create(props: Props): Result<SlotDuration> {
        const isValid = this.isValidProps(props);
        const min = this.minDuration;
        const max = this.maxDuration;
        const multiple = this.multiple;
        const msg = `Slot duration must be between ${max} and ${min}, and multiple of ${multiple}`
        if (!isValid) return Fail(msg);
        return Ok(new SlotDuration(props));
    }
}
