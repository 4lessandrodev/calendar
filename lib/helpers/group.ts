export default function groupByThree(arr: number[]): number[][] {
    if (arr.length <= 3) return [arr];

    const middle = Math.ceil(arr.length / 2);
    const left = groupByThree(arr.slice(0, middle));
    const right = groupByThree(arr.slice(middle));

    return [...left, ...right];
};
