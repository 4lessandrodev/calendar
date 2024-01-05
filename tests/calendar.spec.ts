import BinaryTreeNode from "@/domain/binary-tree-node";
import Calendar from "@/domain/calendar";
import Config from "@/domain/config";
import DateTime from "@/domain/date";
import Day from "@/domain/day";
import Minute from "@/domain/minute";
import Month from "@/domain/month";
import Slot from "@/domain/slot";
import SlotDuration from "@/domain/slot-duration";
import Hour from "@/domain/hour";
import TimeLine from "@/domain/time-line";
import TreeNode from "@/domain/tree-node";
import Year from "@/domain/year";

describe('Calendar', () => {
    it('should create calendar with success', () => {

        const slot = Slot.create({ start: '08:00', end: '08:30' }).value();
        const hour = Hour.create({ slots: new TreeNode(slot), hour: 8 }).value();
        const day = Day.create({ day: 1, hours: new TreeNode(hour), week: 1 }).value();
        const month = Month.create({ month: 1, days: new BinaryTreeNode(day) }).value();
        const year = Year.create({ year: 2024, months: new BinaryTreeNode(month) }).value();
        const timeLine = TimeLine.create({ years: new BinaryTreeNode(year) }).value();

        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2026-01-01T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();

        const config = Config.create({ startDate, endDate, slotDuration }).value();
        const calendar = Calendar.create({ config: config, timeLine: timeLine });

        expect(calendar.isOk()).toBeTruthy();
    });
});
