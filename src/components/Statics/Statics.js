import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useLoaderData } from 'react-router-dom';


const Statics = () => {
    const topic = useLoaderData().data;
    return (
        <div>
            this is recharts
            <BarChart width={730} height={250} data={topic}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="total" fill="#8884d8" />
</BarChart>
        </div>
    );
};

export default Statics;