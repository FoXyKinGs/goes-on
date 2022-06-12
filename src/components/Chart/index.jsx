import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Index({income, expense}) {

  const getIncome = () => {
    let result = []
    income?.forEach(item => {
      result = [...result, item.value]
    })
    return result
  }

  const getExpense = () => {
    let result = []
    expense?.forEach(item => {
      result = [...result, item.value]
    })
    return result
  }

  const getIncomeAddDate = () => {
    let result = []
    income?.forEach(item => {
      result = [...result, `${item.addDate.getFullYear()}/${item.addDate.getMonth() + 1}/${item.addDate.getDate()}`]
    })
    return result
  }

  const getExpenseAddDate = () => {
    let result = []
    expense?.forEach(item => {
      result = [...result, `${item.addDate.getFullYear()}/${item.addDate.getMonth() + 1}/${item.addDate.getDate()}`]
    })
    return result
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Graph'
      }
    },
    scales: {
      x: {
        ticks: {
          display: false
        }
      },
      y: {
        ticks: {
          beginAtZero: true
        }
      }
    }
  }

  const data = {
    labels: getIncomeAddDate().length < getExpenseAddDate().length ? getExpenseAddDate() : getIncomeAddDate(),
    datasets: [
      {
        label: 'Income',
        data: getIncome(),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Expense',
        data: getExpense(),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}