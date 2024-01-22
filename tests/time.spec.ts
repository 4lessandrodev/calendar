import Minute from "@/domain/minute";
import Time from "@/domain/time";

describe('time', () => {
    it('should create time with success', () => {
        const instance = Time.create({ value: '08:00' });
        expect(instance.isOk()).toBe(true);
    });

    it('should return fail if provide an invalid value', () => {
        const instance = Time.create({ value: '0800' });
        expect(instance.isFail()).toBe(true);
    });

    it('should increment 2h and 30 min', () => {
        const instance = Time.create({ value: '08:00' }).value();
        const minutes = Minute.create({ value: 150 }).value();
        const copy = instance.increment(minutes);
        expect(copy.getTime()).toBe('10:30');
    });

    it('should get minutes', () => {
        const instance = Time.create({ value: '08:10' }).value();
        expect(instance.getMinutes()).toBe(10);
    });

    it('should get times', () => {
        const instance = Time.create({ value: '08:10' }).value();
        expect(instance.getTime()).toBe('08:10');
    });

    it('should slice hours', () => {
        const instance = Time.create({ value: '08:10' }).value();
        expect(instance.sliceHours()).toBe('08');
    });

    it('should slice minutes', () => {
        const instance = Time.create({ value: '08:10' }).value();
        expect(instance.sliceMinutes()).toBe('10');
    });

    it('should format time with success', () => {
        const time = Time.format(10, 50);
        expect(time).toBe('10:50');
    });

    it('should format time with success', () => {
        const time = Time.format(10, 70);
        expect(time).toBe('11:10');
    });

    it('should format time with success', () => {
        const time = Time.format(10, 31);
        expect(time).toBe('10:31');
    });

    it('should format time with success', () => {
        const time = Time.format(10, 200);
        expect(time).toBe('13:20');
    });
});
