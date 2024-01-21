import BinaryTreeNode from "@/domain/binary-tree-node";
import Calendar from "@/domain/calendar";
import Config, { PeriodProps } from "@/domain/config";
import DateTime from "@/domain/date";
import Day from "@/domain/day";
import Minute from "@/domain/minute";
import Slot from "@/domain/slot";
import SlotDuration from "@/domain/slot-duration";
import Time from "@/domain/time";
import TimeLine from "@/domain/time-line";
import TreeNode from "@/domain/tree-node";

describe('Calendar', () => {
    it('should create calendar with success', () => {

        const start = Time.create({ value: '08:00' }).value();
        const end = Time.create({ value: '08:30' }).value();
        const slot = Slot.create({ start, end }).value();
        const day = Day.create({ timeStamp: 1704684836639, slots: new TreeNode(slot) }).value();
        const timeLine = TimeLine.create({ days: new BinaryTreeNode(day) }).value();

        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2026-01-01T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();
        const period: PeriodProps = {
            daysInterval: null,
            endsAt: end,
            everyMonthDay: null,
            startAt: start,
            weekDays: []
        }

        const config = Config.create({ startDate, endDate, slotDuration, period }).value();
        const calendar = Calendar.create({ config: config, timeLine: timeLine });

        expect(calendar.isOk()).toBeTruthy();
    });
});
