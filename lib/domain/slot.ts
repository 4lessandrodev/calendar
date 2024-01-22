import { Fail, Ok, Result, ValueObject } from "rich-domain";
import SlotDuration from "@domain/slot-duration";
import TreeNode from "@domain/tree-node";
import Time from "@domain/time";

type Props = {
    start: Time; // 08:30
    end: Time; // 08:45
    event?: any // schedule or block
}

export default class Slot extends ValueObject<Props> {
    private constructor(props: Props) {
        super(props);
    }

    public static first(start: Time, duration: SlotDuration): Slot {
        const end = start.increment(duration.get('minutes'));
        return new Slot({ start, end });
    }

    public static generateSlotForDay(start: Time, end: Time, duration: SlotDuration): TreeNode<Slot> {
        const slots: Slot[] = []
        const first = Slot.first(start, duration);
        slots.push(first);
        let i = 0;
        while (slots[i] && end.isGt(slots[i].get('end'))) {
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
        const start = this.props.end;
        const end = start.increment(duration.get('minutes'));
        return new Slot({ start, end });
    }

    public static isValidProps({ start, end }: Props): boolean {
        return start && end && end.isGt(start);
    }

    public static create(props: Props): Result<Slot> {
        const isValid = this.isValidProps(props);
        if (!isValid) return Fail('Invalid values for slot');
        return Ok(new Slot(props));
    }
}
