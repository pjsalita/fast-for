interface FastForCallbackParams {
  first: {
    data: any;
    key: number;
  };
  second?: {
    data: any;
    key: number;
  };
}

type FastForCallback = ({}: FastForCallbackParams) => void;

const fastFor = (callback: FastForCallback, array: any[]): void => {
  for (
    let firstIndex = 0;
    firstIndex < array.length;
    firstIndex += 2
  ) {
    const firstElement = array[firstIndex];
    const secondIndex = firstIndex + 1;
    const secondElement = array[secondIndex];

    callback({
      first: { data: firstElement, key: firstIndex },
      second: secondElement ? { data: secondElement, key: secondIndex } : undefined,
    });
  }
}

export default fastFor;