import { Fail, Ok, Result, ValueObject } from "rich-domain";
import TreeNode from "@domain/tree-node";
import Slot from "./slot";

type Props = {
    week: number;
    day: number;
    slots: TreeNode<Slot>
}

export default class Day extends ValueObject<Props> {

    private static readonly minWeek: number = 1;
    private static readonly maxWeek: number = 52;
    private static readonly minDay: number = 1;
    private static readonly maxDay: number = 31;

    private constructor(props: Props) {
        super(props);
    }

    public static isValidProps({ week, day }: Props): boolean {
        const isValidDay = this.validator.number(day).isBetweenOrEqual(
            this.minDay,
            this.maxDay
        );
        const isValidWeek = this.validator.number(week).isBetweenOrEqual(
            this.minWeek,
            this.maxWeek
        );
        return isValidDay && isValidWeek;
    }

    public static create(props: Props): Result<Day> {
        const isValid = this.isValidProps(props);
        if(!isValid) return Fail('Invalid value for Day');
        return Ok(new Day(props));
    }
}
