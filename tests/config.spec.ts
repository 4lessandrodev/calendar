import Config, { PeriodProps } from "@/domain/config";
import DateTime from "@/domain/date";
import Minute from "@/domain/minute";
import SlotDuration from "@/domain/slot-duration";
import Time from "@/domain/time";
import WeekDay from "@/domain/week-day";

describe('Config', () => {

    const startAt = Time.create({ value: '08:00' }).value();
    const endsAt = Time.create({ value: '12:00' }).value();
    const weekDay = WeekDay.create({ value: 2 }).value();

    const period: PeriodProps = {
        startAt,
        endsAt,
        daysInterval: null,
        everyMonthDay: null,
        weekDays: [weekDay]
    };

    it('should create a calendar config with success', () => {

        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2026-01-01T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();

        const config = Config.create({
            startDate,
            endDate,
            slotDuration,
            period
        });

        expect(config.isOk()).toBeTruthy();
    });

    it('should return fail if provide start-date lte end-date', () => {
        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();

        const config = Config.create({
            startDate,
            endDate,
            slotDuration,
            period
        });

        expect(config.isFail()).toBeTruthy();
    });

    it('should return fail if provide start-date lte end-date', () => {
        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-02T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();

        const config = Config.create({
            startDate,
            endDate,
            slotDuration,
            period
        });

        expect(config.isFail()).toBeTruthy();
    });

    it('should fail if none config provided', () => {
        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-02T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2025-01-01T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();

        const config = Config.create({
            startDate,
            endDate,
            slotDuration,
            period: { ...period, weekDays: [] }
        });

        expect(config.isFail()).toBeTruthy();
    })

    it('should have config', () => {
        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2026-01-01T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();

        const config = Config.create({
            startDate,
            endDate,
            slotDuration,
            period
        }).value();

        expect(config.hasSomeConfig()).toBe(true);
        expect(config.isConfigByWeekDays()).toBe(true);
        expect(config.isConfigByMonthDay()).toBe(false);
        expect(config.isConfigByDaysInterval()).toBe(false);
    })
});
