import { Fail, Ok, Result, ValueObject } from "rich-domain";
import SlotDuration from "@domain/slot-duration";
import TreeNode from "@domain/tree-node";

type Props = {
    start: string; // 08:30
    end: string; // 08:45
    event?: any // schedule or block
}

export default class Slot extends ValueObject<Props> {

    private static readonly regex: RegExp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/; // hh:mm

    private constructor(props: Props) {
        super(props);
    }

    public static first(start: string, duration: SlotDuration): Slot {
        const result = { hours: '00', minutes: '00' };
        const minutes = parseFloat(start[3] + start[4]);
        const hours = parseFloat(start[0] + start[1]);
        const sum = minutes + duration.get('minutes').get('value');
        if (sum >= 60) {
            const rest = sum - 60;
            result.hours = String(hours + 1);
            if (result.hours.length < 2) { result.hours = '0' + result.hours };
            if (rest <= 9) { result.minutes = '0' + rest };
            if (rest > 9) { result.minutes = String(rest) };
            const end = `${result.hours}:${result.minutes}`;
            const props = { start, end };
            return Slot.create(props).value();
        }

        if (sum <= 9) { result.minutes = '0' + sum };
        if (sum > 9) { result.minutes = String(sum) };
        const currentHour = start.slice(0, 2)
        const end = `${currentHour}:${result.minutes}`;
        const props = { start, end };
        return Slot.create(props).value();
    }

    public static generateSlotForDay(start: string, end: string, duration: SlotDuration): TreeNode<Slot> {
        const slots: Slot[] = []
        const first = Slot.first(start, duration);
        slots.push(first);
        let i = 0;
        while (slots[i] && slots[i].get('end') < end) {
            const lastSlot = slots[i];
            slots.push(lastSlot.increment(duration));
            i++;
        }
        const middle = Math.trunc(slots.length / 2);
        const head = slots[middle];
        const node = new TreeNode(head);
        slots.forEach((slot): TreeNode<Slot> => node.addChild(new TreeNode(slot)));
        return node;
    }

    public increment(duration: SlotDuration): Slot {
        const result = { hours: '00', minutes: '00' };
        const currentValue = this.props.end; // hh:mm
        const minutes = parseFloat(currentValue[3] + currentValue[4]);
        const hours = parseFloat(currentValue[0] + currentValue[1]);
        const sum = minutes + duration.get('minutes').get('value');
        if (sum >= 60) {
            const rest = sum - 60;
            result.hours = String(hours + 1);
            if (result.hours.length < 2) { result.hours = '0' + result.hours };
            if (rest <= 9) { result.minutes = '0' + rest };
            if (rest > 9) { result.minutes = String(rest) };
            const end = `${result.hours}:${result.minutes}`;
            const props = { start: currentValue, end };
            return Slot.create(props).value();
        }

        if (sum <= 9) { result.minutes = '0' + sum };
        if (sum > 9) { result.minutes = String(sum) };
        const currentHour = currentValue.slice(0, 2)
        const end = `${currentHour}:${result.minutes}`;
        const props = { start: currentValue, end };
        return Slot.create(props).value();
    }

    public static isValidProps({ start, end }: Props): boolean {
        const isValidStart = this.validator.string(start).match(this.regex);
        const isValidEnd = this.validator.string(end).match(this.regex);
        const isEndGt = end > start;
        return isEndGt && isValidEnd && isValidStart;
    }

    public static create(props: Props): Result<Slot> {
        const isValid = this.isValidProps(props);
        if (!isValid) return Fail('Invalid values for slot');
        return Ok(new Slot(props));
    }
}
