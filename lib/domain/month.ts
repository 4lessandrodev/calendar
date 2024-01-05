import { Ok, Result, ValueObject } from "rich-domain";
import BinaryTreeNode from "@domain/binary-tree-node";
import Day from "@domain/day";

type Props = {
    month: number;
    days: BinaryTreeNode<Day>
}

export default class Month extends ValueObject<Props> {
    
    private constructor(props: Props){
        super(props);
    }

    public static create(props: Props): Result<Month> {
        /** @todo validate min and max month value */
        return Ok(new Month(props));
    }
}
