import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Analytics.css';

const Analytics = () => {
  const [quize, setQuize] = useState([]);
  console.log(quize)

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/quiz')
      .then(res => res.json())
      .then(data => setQuize(data.data))
  }, [])
  return (


    <div className='analytic'>
      <h3>Analytics of all quizes :</h3>

      <LineChart

        width={1000}
        height={400}
        data={quize}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" type="category" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line dataKey="total" stroke="#82ca9d" />
      </LineChart>
    </div>




  );
};

export default Analytics;