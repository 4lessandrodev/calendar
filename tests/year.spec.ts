import BinaryTreeNode from "@/domain/binary-tree-node";
import Day from "@/domain/day";
import Month from "@/domain/month";
import Slot from "@/domain/slot";
import Time from "@/domain/time";
import TreeNode from "@/domain/tree-node";
import Year from "@/domain/year";

describe('Year', () => {

    const start = Time.create({ value: '01:00' }).value();
    const end = Time.create({ value: '01:15' }).value();

    it('should create year with success', () => {
        const slot = Slot.create({ start, end }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ timeStamp: 1704684836639, slots }).value();
        const days = new BinaryTreeNode(day);
        const month = Month.create({ month: 1, days }).value();
        const months = new BinaryTreeNode(month);
        const year = Year.create({ months, year: 2030 });
        expect(year.isOk()).toBeTruthy();
    });

    it('should return fail if provide year gt 2050', () => {
        const slot = Slot.create({ start, end }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ timeStamp: 1704684836639, slots }).value();
        const days = new BinaryTreeNode(day);
        const month = Month.create({ month: 1, days }).value();
        const months = new BinaryTreeNode(month);
        const year = Year.create({ months, year: 3000 });
        expect(year.isFail()).toBeTruthy();
    });

    it('should return fail if provide year lt 2020', () => {
        const slot = Slot.create({ start, end }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ timeStamp: 1704684836639, slots }).value();
        const days = new BinaryTreeNode(day);
        const month = Month.create({ month: 1, days }).value();
        const months = new BinaryTreeNode(month);
        const year = Year.create({ months, year: 2019 });
        expect(year.isFail()).toBeTruthy();
    });
});
