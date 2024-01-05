import DateTime from "@/domain/date";

describe('date-time', () => {
    it('should create date time with success', () => {
        const value = new Date('2024-01-01T00:00:00');
        const date = DateTime.create({ value });
        expect(date.isOk()).toBeTruthy();
    });

    it('should get date time with success', () => {
        const value = new Date('2024-01-01T00:00:00');
        const date = DateTime.create({ value }).value();
        expect(date.getTime()).toBe(1704078000000);
    });

    it('should to be gt', () => {
        const valueA = new Date('2024-01-01T00:00:00');
        const valueB = new Date('2025-01-01T00:00:00');

        const dateA = DateTime.create({ value: valueA }).value();
        const dateB = DateTime.create({ value: valueB }).value();
        expect(dateA.isGt(dateB)).toBeFalsy();
        expect(dateA.isGt(dateA)).toBeFalsy();
        expect(dateB.isGt(dateA)).toBeTruthy();
    });

    it('should get difference in days', () => {
        const valueA = new Date('2024-01-01T00:00:00');
        const valueB = new Date('2025-01-01T00:00:00');

        const dateA = DateTime.create({ value: valueA }).value();
        const dateB = DateTime.create({ value: valueB }).value();
        expect(dateA.diffInDays(dateB)).toBe(-367);
        expect(dateB.diffInDays(dateA)).toBe(367);
        expect(dateA.diffInDays(dateA)).toBe(0);
    });

    it('should get full year', () => {
        const value = new Date('2024-01-01T00:00:00');
        const date = DateTime.create({ value }).value();
        expect(date.getFullYear()).toBe(2024);
    });
});
