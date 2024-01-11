import { CalendarConfig, CalendarConfigProps } from "@domain/operation";
import TimeLine from "@domain/time-line";
import Config from "@domain/config";
import BinaryTreeNode from "@domain/binary-tree-node";
import Day from "@domain/day";
import Slot from "@domain/slot";

export default class ConfigEveryDay implements CalendarConfig {
    applyConfig(props: CalendarConfigProps, config: Config): TimeLine {
        // Gerar slots para o range do dia
        const slots = Slot.generateSlotForDay(props.startAt, props.endsAt, config.get('slotDuration'));

        // iterar todos os dias
        // iniciando na data inicial da config e finalizando na data final da config
        const startDate = config.get('startDate');
        const endDate = config.get('endDate')

        let targetDateTime = startDate;
        const trees: Map<number, BinaryTreeNode<Day>> = new Map();

        let index = 0;
        while (targetDateTime.getTime() < endDate.getTime()) {
            const timeStamp = targetDateTime.getTime();
            const days = Day.create({ slots, timeStamp }).value();
            trees.set(index, new BinaryTreeNode(days));
            targetDateTime = targetDateTime.addDays(1);
            index++;
        }

        // balancear a arvore
        // ate a metade
        const middle = Math.trunc(trees.size / 2);
        const root = trees.get(middle)!;
        let increment = middle;
        let decrement = middle;
        const compareFn = (a: BinaryTreeNode<Day>, b: BinaryTreeNode<Day>): 'left' | 'right' | undefined => {
            if (a.head().isGt(b.head().getTime())) return 'left';
            if (a.head().isLt(b.head().getTime())) return 'right';
            return undefined;
        };

        while (increment < trees.size || decrement > 0) {
            ++increment;
            --decrement;
            const left = trees.get(decrement);
            const right = trees.get(increment);
            if (left) root.addItem(root, left, compareFn);
            if (right) root.addItem(root, right, compareFn);
        }

        // const years = new BinaryTreeNode(year);
        const timeLine = TimeLine.create({ days: root! }).value();
        return timeLine;
    }
}
