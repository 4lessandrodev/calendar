import Hour from "@/domain/hour";
import Slot from "@/domain/slot";
import Time from "@/domain/time";
import TreeNode from "@/domain/tree-node";

describe('Hour', () => {

    const start = Time.create({ value: '00:00' }).value();
    const end = Time.create({ value: '00:15' }).value();

    it('should create hour with success', () => {

        const slots = new TreeNode(Slot.create({ start, end }).value())
        const hour = Hour.create({ hour: 1, slots: slots });

        expect(hour.isOk()).toBeTruthy();
    });

    it('should return fail if provide negative hour', () => {

        const slots = new TreeNode(Slot.create({ start, end }).value())
        const hour = Hour.create({ hour: -1, slots: slots });

        expect(hour.isFail()).toBeTruthy();
    });

    it('should return fail if provide gte 23', () => {

        const slots = new TreeNode(Slot.create({ start, end }).value())
        const hour = Hour.create({ hour: 24, slots: slots });

        expect(hour.isFail()).toBeTruthy();
    });
});
