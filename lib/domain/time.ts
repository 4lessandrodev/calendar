import { Ok, Result, ValueObject } from "rich-domain";
import TreeNode from "@domain/tree-node";
import Slot from "@domain/slot";

type Props = {
    hour: number;
    slots: TreeNode<Slot>
}

export default class Hour extends ValueObject<Props> {

    private constructor(props: Props) {
        super(props);
    }

    public static create(props: Props): Result<Hour> {
        /** @todo validate min and max hour value */
        return Ok(new Hour(props));
    }
}
