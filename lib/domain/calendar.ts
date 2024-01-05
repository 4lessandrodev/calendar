import { Aggregate } from "rich-domain"
import TimeLine from "@domain/time-line"
import Config from "@domain/config";

type Props = {
    timeLine: TimeLine;
    config: Config;
}

export default class Calendar extends Aggregate<Props> {
    /**
     * @todo implementar métodos
     */
}
