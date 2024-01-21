export const getTimeDifference = (time: string): string => {
  const date = new Date(time);

  const timeDifferenceInSeconds = Math.floor(
    (new Date().getTime() - date.getTime()) / 1000
  );

  const intervals: [string, number][] = [
    ['year', 365 * 24 * 3600],
    ['month', 30 * 24 * 3600],
    ['week', 7 * 24 * 3600],
    ['day', 24 * 3600],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
  ];

  let result = '';
  for (const [name, count] of intervals) {
    const value = Math.floor(timeDifferenceInSeconds / count) as number;
    if (value) {
      result = `${value} ${name}${value > 1 ? 's' : ''} ago`;
      break;
    }
  }

  return result;
};
