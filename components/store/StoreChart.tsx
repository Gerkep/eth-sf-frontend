import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
} from 'chart.js'
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale)

const labels = ['Nov 03', 'Nov 10', 'Nov 17', 'Nov 24', 'Dec 1', 'Dec 8']

//REVENUE CHART
const dataRev = {
    labels: labels,
    datasets: [
        {
            backgroundColor: '#6868B4',
            borderColor: '#6868B4',
            data: [0, 1800, 700, 2200, 4600, 1400],
            fill: false,
            lineTension: 0.1,
            pointBorderColor: '#6868B4',
            pointBackgroundColor: '#6868B4',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#6868B4',
            pointHoverBorderColor: '#6868B4',
            pointHoverBorderWidth: 10,
            pointRadius: 1,
            pointHitRadius: 10,
        },
    ],
}

const optionsRev = {
    scales: {
        y: {
            title: {
                display: true,
                text: 'Revenue'
            },
            ticks: {
                min: 0,
                max: 5000,
                stepSize: 1000
            }
        },
        x: {
            title: {
                display: true,
                text: 'Date'
            }
        }
    },
    plugins: {
        legend: {
            display: false,
            text: 'Revenue'
        },
    },
}
//TRANSACTIONS CHART
const dataTrans = {
    labels: labels,
    datasets: [
        {
            backgroundColor: '#6868B4',
            borderColor: '#6868B4',
            data: [0, 254, 322, 81, 96, 578],
            fill: false,
            lineTension: 0.1,
            pointBorderColor: '#6868B4',
            pointBackgroundColor: '#6868B4',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#6868B4',
            pointHoverBorderColor: '#6868B4',
            pointHoverBorderWidth: 10,
            pointRadius: 1,
            pointHitRadius: 10,
        },
    ],
}

const optionsTrans = {
    scales: {
        y: {
            title: {
                display: true,
                text: 'Transactions'
            },
            ticks: {
                min: 0,
                max: 1000,
                stepSize: 100
            }
        },
        x: {
            title: {
                display: true,
                text: 'Date'
            }
        }
    },
    plugins: {
        legend: {
            display: false,
            text: 'Revenue'
        },
    },
}

export const RevenueChart = () => {
    return (
        <div>
                <Line data={dataRev} options={optionsRev} width={400} height={150} />
                <Line data={dataTrans} options={optionsTrans} width={400} height={150} />
        </div>
    )
}
