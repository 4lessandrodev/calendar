import BinaryTreeNode from "@/domain/binary-tree-node";
import Day from "@/domain/day";
import Hour from "@/domain/hour";
import Month from "@/domain/month";
import Slot from "@/domain/slot";
import TreeNode from "@/domain/tree-node";

describe('Month', () => {
    it('should create month with success', () => {

        const slots = new TreeNode(Slot.create({ start: '00:00', end: '00:15' }).value());
        const hours = new TreeNode(Hour.create({ hour: 1, slots }).value());
        const day = Day.create({ day: 1, hours, week: 1 }).value();
        const days = new BinaryTreeNode(day);

        const month = Month.create({ days: days, month: 1 });
        expect(month.isOk()).toBeTruthy();
    });

    it('should return fail if provide gte 12', () => {

        const slots = new TreeNode(Slot.create({ start: '00:00', end: '00:15' }).value());
        const hours = new TreeNode(Hour.create({ hour: 1, slots }).value());
        const day = Day.create({ day: 1, hours, week: 1 }).value();
        const days = new BinaryTreeNode(day);

        const month = Month.create({ days: days, month: 13 });
        expect(month.isFail()).toBeTruthy();
    });

    it('should return fail if provide lte 1', () => {

        const slots = new TreeNode(Slot.create({ start: '00:00', end: '00:15' }).value());
        const hours = new TreeNode(Hour.create({ hour: 1, slots }).value());
        const day = Day.create({ day: 1, hours, week: 1 }).value();
        const days = new BinaryTreeNode(day);

        const month = Month.create({ days: days, month: 0 });
        expect(month.isFail()).toBeTruthy();
    });
});
