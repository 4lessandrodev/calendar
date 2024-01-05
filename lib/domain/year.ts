import { Ok, Result, ValueObject } from "rich-domain";
import BinaryTreeNode from "@domain/binary-tree-node";
import Month from "@domain/month";

type Props = {
    year: number;
    months: BinaryTreeNode<Month>
};

export default class Year extends ValueObject<Props> {
    
    private constructor(props: Props){
        super(props);
    }

    public static create(props: Props): Result<Year> {
        /** @todo validate min and max year value */
        return Ok(new Year(props));
    }
}
