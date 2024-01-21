import { Fail, Ok, Result, ValueObject } from "rich-domain";
import TreeNode from "@domain/tree-node";
import Slot from "@domain/slot";
import WeekDay from "@domain/week-day";

type Props = {
    timeStamp: number;
    slots: TreeNode<Slot>;
}

export default class Day extends ValueObject<Props> {
    private static readonly minDay: number = 1577847600000 // 2020;
    private static readonly maxDay: number = 2524618800000 // 2050;
    private readonly onDay: number = 86400000

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

    hasWeekDay(weekDays: WeekDay[]): boolean {
        const value = new Date(this.props.timeStamp).getDay() as 1 | 6;
        const weekDay = WeekDay.create({ value }).value();
        return weekDay.hasSomeWeekDay(weekDays);
    }

    addDays(days: number): Date {
        const calc = this.util.number;
        const current = this.props.timeStamp;
        const daysInMs = calc(days).multiplyBy(this.onDay);
        const total = calc(current).sum(daysInMs);
        return new Date(total);
    }

    isLastMonthDay(): boolean {
        const currentMonth = this.getMonth();
        const nextMonth = this.addDays(1).getMonth() + 1; // month starts in 0
        return nextMonth > currentMonth;
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

    public getWeekDay(): WeekDay {
        const value = new Date(this.props.timeStamp).getDay() as 1 | 6;
        return WeekDay.create({ value }).value();
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
        return this.validator.number(this.getMonth()).isEqualTo(month);
    }

    public static create(props: Props): Result<Day> {
        const isValid = this.isValidProps(props);
        if (!isValid) return Fail('Invalid value for Day');
        return Ok(new Day(props));
    }
}
