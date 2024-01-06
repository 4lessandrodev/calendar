import Config from "@/domain/config";
import ConfigEveryDay from "@/domain/config-every-day";
import DateTime from "@/domain/date";
import Minute from "@/domain/minute";
import OperationBuilder from "@/domain/operation-builder";
import SlotDuration from "@/domain/slot-duration";

describe('Config', () => {

    const operation = new OperationBuilder(new ConfigEveryDay());

    it('should create a calendar config with success', () => {

        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2026-01-01T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();

        const config = Config.create({
            startDate,
            endDate,
            slotDuration,
            operation
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
            operation
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
            operation
        });

        expect(config.isFail()).toBeTruthy();
    });
});
