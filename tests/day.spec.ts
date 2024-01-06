import Day from "@/domain/day";
import Slot from "@/domain/slot";
import TreeNode from "@/domain/tree-node";

describe('Day', () => {
    it('should create day with success', () => {

        const slot = Slot.create({ start: '00:00', end: '00:15' }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ day: 1, slots, week: 1 });
        expect(day.isOk()).toBeTruthy();
    });

    it('should return fail if provide value gt 52', () => {

        const slot = Slot.create({ start: '00:00', end: '00:15' }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ day: 1, slots, week: 53 });
        expect(day.isFail()).toBeTruthy();
    });

    it('should return fail if provide value lt 1', () => {

        const slot = Slot.create({ start: '00:00', end: '00:15' }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ day: 1, slots, week: 0 });
        expect(day.isFail()).toBeTruthy();
    });

    it('should return fail if provide value lt 1', () => {

        const slot = Slot.create({ start: '00:00', end: '00:15' }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ day: 0, slots, week: 1 });
        expect(day.isFail()).toBeTruthy();
    });

    it('should return fail if provide value gt 31', () => {

        const slot = Slot.create({ start: '00:00', end: '00:15' }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ day: 32, slots, week: 1 });
        expect(day.isFail()).toBeTruthy();
    });
});
