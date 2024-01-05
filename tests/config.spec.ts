import Config from "@/domain/config";
import DateTime from "@/domain/date";
import Minute from "@/domain/minute";
import SlotDuration from "@/domain/slot-duration";

describe('config', () => {
    it('should create a calendar config with success', () => {

        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2026-01-01T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();

        const config = Config.create({
            startDate,
            endDate,
            slotDuration,
        });

        expect(config.isOk()).toBeTruthy();
    })
});
