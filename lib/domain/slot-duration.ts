import { Fail, Ok, Result, ValueObject } from "rich-domain";
import Minute from "./minute";

type Props = {
    minutes: Minute;
}

export default class SlotDuration extends ValueObject<Props> {

    private static minDuration: number = 4;
    private static maxDuration: number = 61;

    private constructor(props: Props) {
        super(props)
    }

    public static isValidProps({ minutes }: Props): boolean {
        const min = this.minDuration;
        const max = this.maxDuration;
        return minutes && minutes.isBetween(min, max);
    }

    public static create(props: Props): Result<SlotDuration> {
        const isValid = this.isValidProps(props);
        const min = this.minDuration;
        const max = this.maxDuration;
        if (!isValid) return Fail(`Slot duration must be between ${max} and ${min}`);
        return Ok(new SlotDuration(props));
    }
}
