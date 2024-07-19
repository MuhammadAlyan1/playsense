type formatRadarChartDataArguments = {
  data: Record<string, number>;
  labelName?: string;
  valueName?: string;
};

export const formatRadarChartData = ({
  data,
  labelName = 'label',
  valueName = 'value'
}: formatRadarChartDataArguments) => {
  const formattedRadarChartData = Object.entries(data).map(([key, value]) => {
    return {
      [labelName]: key,
      [valueName]: value
    };
  });
  return formattedRadarChartData;
};
