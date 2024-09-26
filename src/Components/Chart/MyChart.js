import Chart from 'react-apexcharts';

export const finalChart = (groupedExpenses) => {
    return Object.keys(groupedExpenses).map((userName, i) => {
      const categories = Object.keys(groupedExpenses[userName]);
      const amounts = categories.map(category => groupedExpenses[userName][category]);

      const chartData = {
        options: {
          chart: {
            id: `chart-${userName}`,
          },
          xaxis: {
            categories: categories,
          },
          plotOptions: {
            bar: {
              distributed: true,
              colors: {
                ranges: [
                  {
                    from: 0,
                    to: 25,
                    color: '#00cc00'
                  },
                  {
                    from: 25,
                    to: 100,
                    color: '#3333ff'
                  }, {
                    from: 101,
                    to: Infinity,
                    color: '#FF0000'
                  }
                ]
              }
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          }
        },
        series: [
          {
            name: 'Amount Spent',
            data: amounts,
          },
        ],
      };

      return (
        <div className='container' key={i}>
          <h2>{userName}'s Expenses</h2>
          <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </div>
      );
    });
  };
