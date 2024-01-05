import { Fail, Ok, Result, ValueObject } from "rich-domain";
import TreeNode from "@domain/tree-node";
import Slot from "@domain/slot";

type Props = {
    hour: number;
    slots: TreeNode<Slot>
}

export default class Hour extends ValueObject<Props> {

    private static readonly minHour: number = 0;
    private static readonly maxHour: number = 23;

    private constructor(props: Props) {
        super(props);
    }

    public static isValidProps({ hour }: Props): boolean {
        return this.validator.number(hour).isBetweenOrEqual(this.minHour, this.maxHour);
    }

    public static create(props: Props): Result<Hour> {
        const isValid = this.isValidProps(props);
        if(!isValid) return Fail('Invalid value for Hour');
        return Ok(new Hour(props));
    }
}
