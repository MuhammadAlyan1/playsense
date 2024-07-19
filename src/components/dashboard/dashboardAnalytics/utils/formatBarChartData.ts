type formatBarChartDataArguments = {
  data: Record<string, number>;
  labelName?: string;
  valueName?: string;
};

export const formatBarChartData = ({
  data,
  labelName = 'label',
  valueName = 'value'
}: formatBarChartDataArguments) => {
  const dataArray = Object.entries(data).map(([key, value]) => {
    return { [key]: value };
  });

  for (let i = 0; i < dataArray.length; i++) {
    for (let j = i + 1; j < dataArray.length; j++) {
      console.log(`I: ${i}, value: ${Object.values(dataArray[i])[0]}`);
      console.log(`J: ${j}, value: ${Object.values(dataArray[j])[0]}`);
      if (Object.values(dataArray[i])[0] < Object.values(dataArray[j])[0]) {
        console.log('IN IF CONDITION');
        const temp = dataArray[i];
        dataArray[i] = dataArray[j];
        dataArray[j] = temp;
      }
    }
  }

  const formattedBarChartData = dataArray
    .map((weapon) => {
      return {
        [labelName]: Object.keys(weapon)[0],
        [valueName]: weapon[Object.keys(weapon)[0]]
      };
    })
    .slice(0, 5);

  return formattedBarChartData;
};
