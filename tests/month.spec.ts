import BinaryTreeNode from "@/domain/binary-tree-node";
import Day from "@/domain/day";
import Month from "@/domain/month";
import Slot from "@/domain/slot";
import Time from "@/domain/time";
import TreeNode from "@/domain/tree-node";

describe('Month', () => {

    const start = Time.create({ value: '00:00' }).value();
    const end = Time.create({ value: '00:15' }).value();

    it('should create month with success', () => {

        const slots = new TreeNode(Slot.create({ start, end  }).value());
        const day = Day.create({ slots, timeStamp: 1704684836639 }).value();
        const days = new BinaryTreeNode(day);

        const month = Month.create({ days: days, month: 1 });
        expect(month.isOk()).toBeTruthy();
    });
});
