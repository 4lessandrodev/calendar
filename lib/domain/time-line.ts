import { Ok, Result, ValueObject } from "rich-domain";
import BinaryTreeNode from "@domain/binary-tree-node";
import Day from "@domain/day";

type Props = {
    days: BinaryTreeNode<Day>;
};

export default class TimeLine extends ValueObject<Props> {
    
    private constructor(props: Props){
        super(props);
    }

    public static create(props: Props): Result<TimeLine> {
        return Ok(new TimeLine(props));
    }
}
