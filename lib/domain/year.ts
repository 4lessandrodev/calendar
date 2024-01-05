import { ValueObject } from "rich-domain";
import BinaryTreeNode from "@domain/binary-tree-node";
import Month from "@domain/month";

type Props = {
    months: BinaryTreeNode<Month>
};

export default class Year extends ValueObject<Props> {
    /**
     * @todo implementar métodos
     */
}
