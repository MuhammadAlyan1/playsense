import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

type CustomRadarChartPropsType = {
  data: unknown[];
  labelName: string;
  valueName: string;
};

const CustomRadarChart: React.FC<CustomRadarChartPropsType> = ({
  data,
  labelName,
  valueName
}) => {
  if (!data || data.length === 0) return;
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#fff" />
          <PolarAngleAxis dataKey={labelName} stroke="#fff" />
          <PolarRadiusAxis />
          <Radar
            name={labelName}
            dataKey={valueName}
            stroke="#fff"
            fill="#1e95d6"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomRadarChart;
