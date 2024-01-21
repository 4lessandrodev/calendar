import { Ok, Result, ValueObject } from "rich-domain";

type Props = {
    value: Date;
}

export default class DateTime extends ValueObject<Props>{

    private readonly oneDayInMs: number = 86000000;

    private constructor(props: Props) {
        super(props)
    }

    public getFullYear(): number {
        return this.props.value.getFullYear();
    }

    public getTime(): number {
        return this.props.value.getTime();
    }

    public getDate(): number {
        const current = this.props.value;
        return current.getDate();
    }

    public getMonth(): number {
        const current = this.props.value;
        return this.util.number(current.getMonth()).sum(1);
    }

    public addDays(days: number): DateTime {
        const calc = this.util.number;
        const currentTime = this.props.value.getTime();
        const daysInMs = calc(this.oneDayInMs).multiplyBy(days);
        const value = calc(currentTime).sum(daysInMs)
        return new DateTime({ value: new Date(value) });
    }

    public isGt(date: DateTime): boolean {
        const calc = this.validator.number;
        const currentTime = this.getTime();
        return calc(currentTime).isGreaterThan(date.getTime());
    }

    public diffInDays(date: DateTime): number {
        const calc = this.util.number;
        const currentTime = this.getTime();
        const dtTime = date.getTime();
        const diff = calc(currentTime).subtract(dtTime);
        return Math.trunc(calc(diff).divideBy(this.oneDayInMs));
    }

    public static create(props: Props): Result<DateTime> {
        return Ok(new DateTime(props));
    }
}
