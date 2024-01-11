import Day from "@/domain/day";
import Slot from "@/domain/slot";
import TreeNode from "@/domain/tree-node";

describe('Day', () => {
    it('should create day with success', () => {
        const slot = Slot.create({ start: '00:00', end: '00:15' }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ timeStamp: 1704684836639, slots });
        expect(day.isOk()).toBeTruthy();
    });
});
