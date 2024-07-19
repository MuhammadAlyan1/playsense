import React from 'react';
import {
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  XAxis,
  YAxis
} from 'recharts';

type CustomBarChartPropsType = {
  data: unknown[];
  labelName: string;
  valueName: string;
};

const CustomBarChart: React.FC<CustomBarChartPropsType> = ({
  data,
  labelName,
  valueName
}) => {
  if (!data || data.length === 0) return;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid />
        <XAxis dataKey={labelName} stroke="white" fontSize={12} />
        <YAxis stroke="white" />
        <Tooltip contentStyle={{ color: '#1e95d6' }} />
        <Legend />
        <Bar dataKey={valueName} fill="#1e95d6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
