import Config from "@/domain/config";
import ConfigEveryDay from "@/domain/config-every-day";
import DateTime from "@/domain/date";
import Minute from "@/domain/minute";
import OperationBuilder from "@/domain/operation-builder";
import SlotDuration from "@/domain/slot-duration";
import { writeFileSync } from 'fs'

describe('ConfigEveryDay', () => {
    it('should create timeline with success', () => {
        const service = new ConfigEveryDay();
        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2024-01-03T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();
        const operation = new OperationBuilder(service);
        const config = Config.create({ startDate, endDate, slotDuration, operation }).value();
        const result = service.applyConfig({ startAt: '08:00', endsAt: '14:00' }, config);

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
        const service = new ConfigEveryDay();
        const minutes = Minute.create({ value: 15 }).value();
        const startDate = DateTime.create({ value: new Date('2024-01-01T00:00:00') }).value();
        const endDate = DateTime.create({ value: new Date('2024-01-16T00:00:00') }).value();
        const slotDuration = SlotDuration.create({ minutes }).value();
        const operation = new OperationBuilder(service);
        const config = Config.create({ startDate, endDate, slotDuration, operation }).value();
        const result = service.applyConfig({ startAt: '08:00', endsAt: '12:00' }, config);

        const a = result.get('days').toObject();
        writeFileSync('result.json', JSON.stringify(a, null, 2), 'utf8');
    });
});
