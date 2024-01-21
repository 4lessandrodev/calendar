import Day from "@/domain/day";
import Slot from "@/domain/slot";
import Time from "@/domain/time";
import TreeNode from "@/domain/tree-node";
import WeekDay from "@/domain/week-day";

describe('Day', () => {
    it('should create day with success', () => {
        const start = Time.create({ value: '00:00' }).value();
        const end = Time.create({ value: '00:15' }).value();

        const slot = Slot.create({ start, end }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ timeStamp: 1704684836639, slots });
        expect(day.isOk()).toBeTruthy();
    });

    it('should have weekday 1-Mon', () => {
        const start = Time.create({ value: '08:00' }).value();
        const end = Time.create({ value: '08:15' }).value();

        const slot = Slot.create({ start, end }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ timeStamp: 1704684836639, slots }).value();
        
        const weekDays = [WeekDay.create({ value: 1 }).value()];
        const hasWeekDay = day.hasWeekDay(weekDays);
        expect(hasWeekDay).toBeTruthy();
    });

    it('should add day with success', () => {
        const start = Time.create({ value: '08:00' }).value();
        const end = Time.create({ value: '08:15' }).value();

        const slot = Slot.create({ start, end }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ timeStamp: 1704684836639, slots }).value();
        
        const upd = day.addDays(2);
        expect(upd.getTime()).toBe(1704857636639);
    })

    it('should to be last month day', () => {
        const start = Time.create({ value: '08:00' }).value();
        const end = Time.create({ value: '08:15' }).value();

        const slot = Slot.create({ start, end }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ timeStamp: 1706672036639, slots }).value();
        
        expect(day.isLastMonthDay()).toBe(true);
    })

    it('should getters to be defined', () => {
        const start = Time.create({ value: '08:00' }).value();
        const end = Time.create({ value: '08:15' }).value();

        const slot = Slot.create({ start, end }).value();
        const slots = new TreeNode(slot);
        const day = Day.create({ timeStamp: 1706672036639, slots }).value();
        
        expect(day.getTime()).toBe(1706672036639);
        expect(day.getFullYear()).toBe(2024);
        expect(day.getMonth()).toBe(1);
        expect(day.getDate()).toBe(31);
        expect(day.getWeekDay().getDayName()).toBe('WEDNESDAY');
        expect(day.isGt(1706672036620)).toBe(true);
        expect(day.isLt(1706672036620)).toBe(false);
        expect(day.dayBelongsToYear(2024)).toBe(true);
        expect(day.dayBelongsToMonth(1)).toBe(true);
    })
});
