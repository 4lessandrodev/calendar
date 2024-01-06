import { CalendarConfig, CalendarConfigProps } from "@domain/operation";
import TimeLine from "@domain/time-line";
import Config from "@domain/config";
import BinaryTreeNode from "@domain/binary-tree-node";
import Year from "@domain/year";
import Month from "@domain/month";
import Day from "@domain/day";
import Slot from "@domain/slot";

export default class ConfigEveryDay implements CalendarConfig {
    applyConfig(props: CalendarConfigProps, config: Config): TimeLine {
        // implementar algoritmo para criar a timeline

        // Gerar slots
        const slots = Slot.generateSlotForDay(props.startAt, props.endsAt, config.get('slotDuration'));
    
        const day = Day.create({ day: 1, slots }).value();
        const days = new BinaryTreeNode(day);

        const month = Month.create({ month: 1, days }).value();
        const months = new BinaryTreeNode(month);
        const year = Year.create({ year: 2020, months }).value();
        const years = new BinaryTreeNode(year);
        const timeLine = TimeLine.create({ years }).value();
        return timeLine;
    }
}
