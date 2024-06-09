import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  PolarAngleAxis,
  Radar,
} from "recharts";

const Marks = () => {
  const data = [
    {
      name: "Page A",
      marks: 4000,
      quiz: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      marks: 3000,
      quiz: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      marks: 2000,
      quiz: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      marks: 2780,
      quiz: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      marks: 1890,
      quiz: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      marks: 2390,
      quiz: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      marks: 3490,
      quiz: 4300,
      amt: 2100,
    },
  ];
  
  return (
    <div className="mt-5">
      <div>
        <LineChart width={500} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
          <Line type="monotone" dataKey="quiz" stroke="#8884d8" />
          <Tooltip></Tooltip>
        </LineChart>
      </div>
    </div>
  );
};

export default Marks;
