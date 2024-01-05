import { Fail, Ok, Result, ValueObject } from "rich-domain";
import BinaryTreeNode from "@domain/binary-tree-node";
import Day from "@domain/day";

type Props = {
    month: number;
    days: BinaryTreeNode<Day>
}

export default class Month extends ValueObject<Props> {
    private static readonly minMonth: number = 1;
    private static readonly maxMonth: number = 12;
    
    private constructor(props: Props){
        super(props);
    }

    public static isValidProps({ month }: Props): boolean {
        const min = this.minMonth;
        const max = this.maxMonth;
        return this.validator.number(month).isBetweenOrEqual(min, max);
    }

    public static create(props: Props): Result<Month> {
        const isValid = this.isValidProps(props);
        if(!isValid) return Fail('Invalid value for Month');
        return Ok(new Month(props));
    }
}
