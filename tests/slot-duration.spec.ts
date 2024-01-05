import Minute from "@/domain/minute";
import SlotDuration from "@/domain/slot-duration";


describe('slot-duration', () => {
    it('should create slot with success', () => {
        const minutes = Minute.create({ value: 15 }).value();
        const slot = SlotDuration.create({ minutes });
        expect(slot.isOk()).toBeTruthy();
    });

    it('should return fail if value is not 5 multiple', () => {
        const minutes = Minute.create({ value: 6 }).value();
        const slot = SlotDuration.create({ minutes });
        expect(slot.isFail()).toBeTruthy();
    });

    it('should return fail if value is lt 5 minutes', () => {
        const minutes = Minute.create({ value: 3 }).value();
        const slot = SlotDuration.create({ minutes });
        expect(slot.isFail()).toBeTruthy();
    });

    it('should return fail if value is gt 60 minutes', () => {
        const minutes = Minute.create({ value: 61 }).value();
        const slot = SlotDuration.create({ minutes });
        expect(slot.isFail()).toBeTruthy();
    });
});
