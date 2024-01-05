import Minute from "@/domain/minute";

describe('minute', () => {
    it('should create a minute with success', () => {
        const minute = Minute.create({ value: 1 });
        expect(minute.isOk()).toBeTruthy();
        expect(minute.value().get('value')).toBe(1);
    });

    it('should create a minute with success', () => {
        const minute = Minute.create({ value: 15 }).value();
        expect(minute.isBetween(10, 20)).toBeTruthy();
        expect(minute.isBetween(15, 16)).toBeFalsy();
        expect(minute.isBetween(14, 15)).toBeFalsy();
    });
});
