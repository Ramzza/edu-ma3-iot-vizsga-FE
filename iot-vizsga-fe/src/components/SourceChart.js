import React, { useState, useEffect } from 'react';
import MyLineChart from './MyLineChart';

const SourceChart = (props) => {
	const [temperatures, setTemperatures] = useState([]);
	const [chartData, setChartData] = useState([]);
	const [chartLabels, setChartLabels] = useState([]);

	const prepareChartData = () => {
		const labels = [];
		const currentChartData = [];

		temperatures.forEach((tempData) => {
			labels.push(tempData.title);
			currentChartData.push(tempData.description);
		});

		setChartLabels(labels);

		setChartData([
			{
				label: 'Temperatures',
				data: currentChartData,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		]);

		console.log(chartData);
	};

	const onDataChange = (items) => {
		let temperaturesNew = [];

		items.forEach((item) => {
			let key = item.key;
			let data = item.val();
			temperaturesNew.push({
				key: key,
				title: data.time,
				description: data.value,
			});
		});

		if (JSON.stringify(temperatures) !== JSON.stringify(temperaturesNew)) {
			setTemperatures(temperaturesNew);
		}
	};

	useEffect(() => {
		props.dataSource.getAll().on('value', onDataChange);
	}, []);

	useEffect(() => {
		prepareChartData();
	}, [temperatures.length]);

	return (
		<div>
			<MyLineChart data={chartData} labels={chartLabels} />
		</div>
	);
};

export default SourceChart;
