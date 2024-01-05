import { Fail, Ok, Result, ValueObject } from "rich-domain";
import BinaryTreeNode from "@domain/binary-tree-node";
import Month from "@domain/month";

type Props = {
    year: number;
    months: BinaryTreeNode<Month>
};

export default class Year extends ValueObject<Props> {

    private static readonly minYear: number = 2020;
    private static readonly maxYear: number = 2050;

    private constructor(props: Props) {
        super(props);
    }

    public static isValidProps({ year }: Props): boolean {
        const min = this.minYear;
        const max = this.maxYear;
        return this.validator.number(year).isBetweenOrEqual(min, max);
    }

    public static create(props: Props): Result<Year> {
        const isValidYear = this.isValidProps(props);
        if (!isValidYear) return Fail('Invalid year range for Year');
        return Ok(new Year(props));
    }
}
