import { Aggregate, Ok, Result } from "rich-domain"
import TimeLine from "@domain/time-line"
import Config from "@domain/config";

type Props = {
    timeLine: TimeLine;
    config: Config;
}

export default class Calendar extends Aggregate<Props> {
    
    private constructor(props: Props){
        super(props);
    }

    public static create(props: Props): Result<Calendar> {
        return Ok(new Calendar(props));
    }
}
