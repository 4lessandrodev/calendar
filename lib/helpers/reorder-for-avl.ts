export default function reorderForAVL(input: number[]): number[] {
  if (input.length === 0) {
    return [];
  }

  const result: number[] = [];

  const reorderRecursive = (startIndex: number, endIndex: number): void => {
    if (startIndex > endIndex) {
      return;
    }

    const mid = Math.floor((startIndex + endIndex) / 2);
    result.push(input[mid]);

    reorderRecursive(startIndex, mid - 1);
    reorderRecursive(mid + 1, endIndex);
  };

  reorderRecursive(0, input.length - 1);
  return result;
}
