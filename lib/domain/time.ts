import { Fail, Ok, Result, ValueObject } from "rich-domain";
import Minute from "@domain/minute";

type Props = {
    value: string; // hh:mm
}

export default class Time extends ValueObject<Props> {
    private static readonly regex: RegExp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/; // hh:mm

    private constructor(props: Props) {
        super(props)
    }

    sliceMinutes(): string {
        const time = this.props.value;
        return time.slice(3);
    }

    sliceHours(): string {
        const time = this.props.value;
        return time.slice(0, 2);
    }

    /**
     * @returns time as string `hh:mm`
     */
    getTime(): string {
        return this.props.value;
    }

    /**
     * @returns minutes as number
     */
    getMinutes(): number {
        const time = this.props.value;
        const minutes = parseFloat(time[3] + time[4]);
        return minutes;
    }

    /**
     * @returns hours as number
     */
    getHours(): number {
        const time = this.props.value;
        const hours = parseFloat(time[0] + time[1]);
        return hours;
    }

    isGt(other: Time): boolean {
        return this.getTime() > other.getTime();
    }

    private static formatHour(hours: number): string {
        if (hours <= 0) return '00';
        if (hours <= 9) return `0${hours}`;
        if (hours >= 24) return this.formatHour(hours % 24);
        return `${hours}`;
    }

    private static formatMinutes(minute: number): string {
        if (minute <= 0) return '00';
        if (minute <= 9) return `0${minute}`;
        if (minute >= 60) return this.formatHour(minute % 60);
        return `${minute}`;
    }

    public static format(hours: number, minutes: number): string {
        const calc = this.util.number;
        const restHour = Math.trunc(calc(minutes).divideBy(60));
        const minute = this.formatMinutes(minutes);
        const hour = this.formatHour(calc(hours).sum(restHour));
        return `${hour}:${minute}`;
    }

    private incrementHours(hours: number): Time {
        if (hours <= 0) return this;
        const currentHour = this.getHours();
        const calc = this.util.number;
        const hour = calc(currentHour).sum(hours);
        const minute = this.getMinutes();
        const value = Time.format(hour, minute);
        return new Time({ value });
    }

    private incrementMinutes(minutes: number): Time {
        if (minutes <= 0) return this;
        const calc = this.util.number;
        const hours = Math.trunc(calc(minutes).divideBy(60));
        const instance = this.incrementHours(hours);
        const minDec = calc(hours).multiplyBy(60);
        const rmHours = calc(minutes).subtract(minDec);
        const minute = calc(rmHours).sum(instance.getMinutes());
        const hour = instance.getHours();
        const value = Time.format(hour, minute);
        return new Time({ value });
    }

    /**
     * @param minutes 
     * @returns new instance of Time
     */
    increment(minutes: Minute): Time {
        const calc = this.util.number
        const value = minutes.get('value');
        const hours = Math.trunc(calc(value).divideBy(60));
        const minute = value % 60;
        const instance = this.incrementHours(hours);
        return instance.incrementMinutes(minute);
    }

    public static isValidProps({ value }: Props): boolean {
        return this.validator.string(value).match(this.regex);
    }

    /**
     * @description value must to have pattern hh:mm
     * @param props as { value: "00:00" }
     * @returns Result
     */
    public static create(props: Props): Result<Time> {
        const isValid = this.isValidProps(props);
        if (!isValid) return Fail('Invalid value for time. hh:mm');
        return Ok(new Time(props))
    }
}
