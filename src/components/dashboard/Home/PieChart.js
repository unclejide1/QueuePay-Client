import { Pie } from 'react-chartjs-2';
import React from 'react';
import { PieDiv } from '../../styled-components';
// import { useGet } from 'restful-react';

const PieChart = () => {
//   const { error, loading, data: stats } = useGet({
//     path: 'api/stats',
//   });

//   if (loading) {
//     return 'loading...';
//   }
//   if (error) {
//     return 'error loading page';
//   }
  const driverData = {
    labels: ['Successful', 'Failed'],
    datasets: [
      {
        label: 'Transactions',
        data: [10_000, 5_000],
        backgroundColor: ['green', 'red'],
      },
    ],
  };
  return (
    <PieDiv>
      <Pie data={driverData} />
    </PieDiv>
  );
};

export default PieChart;