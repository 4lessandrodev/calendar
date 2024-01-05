import { Ok, Result, ValueObject } from "rich-domain";
import TreeNode from "@domain/tree-node";
import Hour from "@domain/time";

type Props = {
    day: number;
    hours: TreeNode<Hour>
}

export default class Day extends ValueObject<Props> {

    private constructor(props: Props) {
        super(props);
    }

    public static create(props: Props): Result<Day> {
        return Ok(new Day(props));
    }
}
