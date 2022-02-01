import React from 'react';
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

const styles = {
	myChart: {
		width: 'inherit',
		height: 'inherit',
	},
};

const getRandomInt = (max) =>
	Math.floor((Math.random() * max * -1) ^ Math.floor(Math.random() * 2));

const MyLineChart = (props) => {
	const labels = props.labels
		? props.labels
		: ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

	const options = {
		// responsive: true,
		plugins: {
			// legend: {
			// 	position: 'top',
			// },
			title: {
				display: true,
				text: props.title ? props.title : 'Default Line Chart',
			},
		},
	};

	const data = {
		labels,
		datasets: props.data
			? props.data
			: [
					{
						label: 'Dataset 1',
						data: labels.map(() => getRandomInt(1000)),
						borderColor: 'rgb(255, 99, 132)',
						backgroundColor: 'rgba(255, 99, 132, 0.5)',
					},
					{
						label: 'Dataset 2',
						data: labels.map(() => getRandomInt(1000)),
						borderColor: 'rgb(53, 162, 235)',
						backgroundColor: 'rgba(53, 162, 235, 0.5)',
					},
			  ],
	};

	return (
		<Line
			style={styles.myChart}
			options={options}
			data={data}
			height={100}
			width={200}
		/>
	);
};

export default MyLineChart;
