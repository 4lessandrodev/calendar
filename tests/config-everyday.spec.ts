import { PeriodProps } from "@/domain/config";
import ConfigWeekDays from "@/domain/config-week-days";
import DateTime from "@/domain/date";
import Minute from "@/domain/minute";
import SlotDuration from "@/domain/slot-duration";
import Time from "@/domain/time";
import { writeFileSync } from 'fs'

describe('ConfigEveryDay', () => {
    it('should create timeline with success', () => {
        const service = new ConfigWeekDays();
        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2024-01-03T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();
        const period: PeriodProps = {
            daysInterval: null,
            endsAt: Time.create({ value: '14:00' }).value(),
            everyMonthDay: null,
            startAt: Time.create({ value: '08:00' }).value(),
            weekDays: []
        };
        const configProps = {
            startDate,
            endDate,
            slotDuration,
            period
        }
        const result = service.applyConfig(configProps);

        const a = result.get('days');
        expect(a.toObject()).toMatchObject(
            {
                "left": {
                    "left": null,
                    "right": null,
                    "value": {
                        "slots": {
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
                            ],
                            "value": {
                                "end": "11:15",
                                "start": "11:00",
                            },
                        },
                        "timeStamp": 1704078000000,
                    },
                },
                "right": {
                    "left": null,
                    "right": null,
                    "value": {
                        "slots": {
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
                            ],
                            "value": {
                                "end": "11:15",
                                "start": "11:00",
                            },
                        },
                        "timeStamp": 1704250000000,
                    },
                },
                "value": {
                    "slots": {
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
                        ],
                        "value": {
                            "end": "11:15",
                            "start": "11:00",
                        },
                    },
                    "timeStamp": 1704164000000,
                },
            }
        );
    });

    it.only('should create timeline with success', () => {
        const service = new ConfigWeekDays();
        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2024-01-16T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();
        const period: PeriodProps = {
            daysInterval: null,
            endsAt: Time.create({ value: '12:00' }).value(),
            everyMonthDay: null,
            startAt: Time.create({ value: '08:00' }).value(),
            weekDays: []
        };
        const configProps = {
            startDate,
            endDate,
            slotDuration,
            period
        }

        const result = service.applyConfig(configProps);

        const a = result.get('days').toObject();
        writeFileSync('result.json', JSON.stringify(a, null, 2), 'utf8');
    });
});
