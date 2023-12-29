import { ValueObject } from "rich-domain";
import TreeNode from "@domain/tree-node";
import Year from "@domain/year";
import List from "@domain/list";

type Props = {
    years: List<TreeNode<Year>>;
};

export default class TimeLine extends ValueObject<Props> {
    /**
     * @todo implementar métodos
     */
}
