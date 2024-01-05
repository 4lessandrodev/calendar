import Slot from "@/domain/slot";

describe('slot', () => {
    it('should crete valid slot', () => {
        const start = '08:00';
        const end = '08:15';
        const slot = Slot.create({ start, end });
        expect(slot.isOk()).toBeTruthy();
    });

    it('should return fail if end lte star', () => {
        const start = '08:00';
        const end = '08:00';
        const slot = Slot.create({ start, end });
        expect(slot.isFail()).toBeTruthy();
    });

    it('should return fail on invalid pattern', () => {
        const start = '08:90';
        const end = '08:00';
        const slot = Slot.create({ start, end });
        expect(slot.isFail()).toBeTruthy();
    });

    it('should return fail on invalid pattern', () => {
        const start = '0850';
        const end = '08:00';
        const slot = Slot.create({ start, end });
        expect(slot.isFail()).toBeTruthy();
    });
});
