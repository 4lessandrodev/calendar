import { Ok, Result, ValueObject } from "rich-domain";
import Year from "@domain/year";
import BinaryTreeNode from "@domain/binary-tree-node";

type Props = {
    years: BinaryTreeNode<Year>;
};

export default class TimeLine extends ValueObject<Props> {
    
    private constructor(props: Props){
        super(props);
    }

    public static create(props: Props): Result<TimeLine> {
        return Ok(new TimeLine(props));
    }
}
