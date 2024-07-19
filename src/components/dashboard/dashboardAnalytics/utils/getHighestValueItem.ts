export const getHighestValueItem = (object: Record<string, number>) => {
  let highestValueKey = '';

  Object.entries(object).forEach(([key, value]) => {
    if (!highestValueKey) {
      highestValueKey = key;
      return;
    }

    if (value > object[highestValueKey]) {
      highestValueKey = key;
    }
  });

  return highestValueKey;
};
