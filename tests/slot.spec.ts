import Minute from "@/domain/minute";
import Slot from "@/domain/slot";
import SlotDuration from "@/domain/slot-duration";
import Time from "@/domain/time";

describe('Slot', () => {
    it('should crete valid slot', () => {
        const start = Time.create({ value: '08:00' }).value();
        const end = Time.create({ value: '08:15' }).value();
        const slot = Slot.create({ start, end });
        expect(slot.isOk()).toBeTruthy();
    });

    it('should return fail if end lte star', () => {
        const start = Time.create({ value: '08:00' }).value();
        const end = Time.create({ value: '08:00' }).value();
        const slot = Slot.create({ start, end });
        expect(slot.isFail()).toBeTruthy();
    });

    it('should return fail on invalid pattern', () => {
        const start = Time.create({ value: '08:90' }).value();
        const end = Time.create({ value: '08:00' }).value();
        const slot = Slot.create({ start, end });
        expect(slot.isFail()).toBeTruthy();
    });

    it('should return fail on invalid pattern', () => {
        const start = Time.create({ value: '0850' }).value();
        const end = Time.create({ value: '08:00' }).value();
        const slot = Slot.create({ start, end });
        expect(slot.isFail()).toBeTruthy();
    });

    it('should increment 15 minutes to slot', () => {
        const start = Time.create({ value: '08:00' }).value();
        const end = Time.create({ value: '08:15' }).value();
        const slot = Slot.create({ start, end }).value();
        const duration = SlotDuration.create({ minutes: Minute.create({ value: 15 }).value() }).value();

        const a = slot.increment(duration);
        const b = a.increment(duration);
        const c = b.increment(duration);
        const d = c.increment(duration);
        const e = d.increment(duration);
        const f = e.increment(duration);
        const payload = {
            a: a.toObject(),
            b: b.toObject(),
            c: c.toObject(),
            d: d.toObject(),
            e: e.toObject(),
            f: f.toObject(),
        };

        expect(payload).toMatchObject(
            {
                "a": {
                    "end": "08:30",
                    "start": "08:15",
                },
                "b": {
                    "end": "08:45",
                    "start": "08:30",
                },
                "c": {
                    "end": "09:00",
                    "start": "08:45",
                },
                "d": {
                    "end": "09:15",
                    "start": "09:00",
                },
                "e": {
                    "end": "09:30",
                    "start": "09:15",
                },
                "f": {
                    "end": "09:45",
                    "start": "09:30",
                },
            }
        );
    });

    it('should generate first slot based in duration', () => {
        const start = Time.create({ value: '08:00' }).value();
        const duration = SlotDuration.create({ minutes: Minute.create({ value: 15 }).value() }).value();

        const slot = Slot.first(start, duration);
        expect(slot.toObject()).toMatchObject(
            {
                "end": "08:15",
                "start": "08:00",
            }
        );
    });

    it('should generate slots for a day', () => {
        const startsAt = Time.create({ value: '08:00' }).value();
        const endsAt = Time.create({ value: '15:00' }).value();
        const duration = SlotDuration.create({ minutes: Minute.create({ value: 15 }).value() }).value();

        const tree = Slot.generateSlotForDay(startsAt, endsAt, duration);
        expect(tree.toObject()).toMatchObject(
            {
                "children": [
                    {
                        "children": [],
                        "value": {
                            "end": "08:15",
                            "start": "08:00",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "08:30",
                            "start": "08:15",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "08:45",
                            "start": "08:30",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "09:00",
                            "start": "08:45",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "09:15",
                            "start": "09:00",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "09:30",
                            "start": "09:15",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "09:45",
                            "start": "09:30",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "10:00",
                            "start": "09:45",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "10:15",
                            "start": "10:00",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "10:30",
                            "start": "10:15",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "10:45",
                            "start": "10:30",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "11:00",
                            "start": "10:45",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "11:15",
                            "start": "11:00",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "11:30",
                            "start": "11:15",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "11:45",
                            "start": "11:30",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "12:00",
                            "start": "11:45",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "12:15",
                            "start": "12:00",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "12:30",
                            "start": "12:15",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "12:45",
                            "start": "12:30",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "13:00",
                            "start": "12:45",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "13:15",
                            "start": "13:00",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "13:30",
                            "start": "13:15",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "13:45",
                            "start": "13:30",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "14:00",
                            "start": "13:45",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "14:15",
                            "start": "14:00",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "14:30",
                            "start": "14:15",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "14:45",
                            "start": "14:30",
                        },
                    },
                    {
                        "children": [],
                        "value": {
                            "end": "15:00",
                            "start": "14:45",
                        },
                    },
                ],
                "value": {
                    "end": "11:45",
                    "start": "11:30",
                },
            }
        );
    });
});
