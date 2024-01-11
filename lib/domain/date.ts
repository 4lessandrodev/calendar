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
        return current.getMonth() + 1;
    }

    public addDays(days: number): DateTime {
        const currentTime = this.props.value.getTime();
        const value = new Date(currentTime + (this.oneDayInMs * days));
        return new DateTime({ value });
    }

    public isGt(date: DateTime): boolean {
        const currentTime = this.getTime();
        return currentTime > date.getTime();
    }

    public diffInDays(date: DateTime): number {
        const currentTime = this.getTime();
        const dtTime = date.getTime();
        const diff = currentTime - dtTime;
        return Math.trunc(diff / this.oneDayInMs);
    }

    public static create(props: Props): Result<DateTime> {
        return Ok(new DateTime(props));
    }
}
