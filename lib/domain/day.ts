import { Fail, IAdapter, Ok, Result, ValueObject } from "rich-domain";
import TreeNode from "@domain/tree-node";
import Slot from "./slot";

type Props = {
    timeStamp: number;
    slots: TreeNode<Slot>;
}

export default class Day extends ValueObject<Props> {
    private static readonly minDay: number = 1577847600000 // 2020;
    private static readonly maxDay: number = 1893466800000 // 2030;

    private constructor(props: Props) {
        super(props);
    }

    public static isValidProps({ timeStamp }: Props): boolean {
        const isValidDay = this.validator.number(timeStamp).isBetweenOrEqual(
            this.minDay,
            this.maxDay
        );
        return isValidDay;
    }

    toObject(): any {
        return {
            timeStamp: this.props.timeStamp,
            slots: this.props.slots.toObject(),
        }
    }

    /** @returns timeStamp as number */
    public getTime(): number {
        return this.props.timeStamp;
    }

    public getFullYear(): number {
        return new Date(this.props.timeStamp).getFullYear();
    }

    public getMonth(): number {
        return new Date(this.props.timeStamp).getMonth() + 1;
    }

    /** @returns month date (1-31) */
    public getDate(): number {
        return new Date(this.props.timeStamp).getDate();
    }

    public isGt(timeStamp: number): boolean {
        return this.validator.number(this.getTime()).isGreaterThan(timeStamp);
    }

    public isLt(timeStamp: number): boolean {
        return this.validator.number(this.getTime()).isLessThan(timeStamp);
    }

    public dayBelongsToYear(year: number): boolean {
        return this.validator.number(this.getFullYear()).isEqualTo(year);
    }

    public dayBelongsToMonth(month: number): boolean {
        return this.validator.number(this.props.timeStamp).isEqualTo(month);
    }

    public static create(props: Props): Result<Day> {
        const isValid = this.isValidProps(props);
        if (!isValid) return Fail('Invalid value for Day');
        return Ok(new Day(props));
    }
}
