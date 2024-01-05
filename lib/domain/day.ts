import { ValueObject } from "rich-domain";
import TreeNode from "@domain/tree-node";
import Hour from "@domain/time";

type Props = {
    day: number;
    hours: TreeNode<Hour>
}

export default class Day extends ValueObject<Props> {
    /**
     * @todo implementar métodos
     */
}
