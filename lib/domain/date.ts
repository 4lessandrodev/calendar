import { Ok, Result, ValueObject } from "rich-domain";

type Props = {
    value: Date;
}

export default class DateTime extends ValueObject<Props>{

    private readonly oneDayInMs: number = 86000000;

    private constructor(props: Props) {
        super(props)
    }

    public getTime(): number {
        return this.props.value.getTime();
    }

    public isGt(date: DateTime): boolean {
        const currentTime = this.getTime();
        return currentTime > date.getTime();
    }

    public diffInDays(date: DateTime): number {
        const currentTime = this.getTime();
        const dtTime = date.getTime();
        const diff = currentTime - dtTime;
        return diff / this.oneDayInMs;
    }

    public static create(props: Props): Result<DateTime> {
        return Ok(new DateTime(props));
    }
}
