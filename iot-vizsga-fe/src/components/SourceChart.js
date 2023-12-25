import React, { useState, useEffect } from 'react';
import MyLineChart from './MyLineChart';

const SourceChart = (props) => {
	const [temperatures, setTemperatures] = useState([]);
	const [chartData, setChartData] = useState([]);
	const [chartLabels, setChartLabels] = useState([]);

	const determineChartColor = (colorString) => {
		let result = '15, 15, 15';

		switch (colorString) {
			case 'red': {
				result = '255, 99, 132';
				break;
			}
			case 'yellow': {
				result = '252, 186, 3';
				break;
			}
			case 'blue': {
				result = '13, 5, 240';
				break;
			}
			case 'green': {
				result = '8, 138, 32';
				break;
			}
		}

		return result;
	};

	const getColorForLine = (colorString) => 'rgba(' + colorString + ', 0.5)';

	const getColorForLineBorder = (colorString) => 'rgb(' + colorString + ')';

	const chartLabel = props.label ? props.label : 'DefaultLabel';

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
				label: chartLabel,
				data: currentChartData,
				borderColor: getColorForLineBorder(
					determineChartColor(props.lineColor)
				),
				backgroundColor: getColorForLine(determineChartColor(props.lineColor)),
			},
		]);

		console.log(chartData);
	};

	const onDataChange = (items) => {
		let temperaturesNew = [];

		items.forEach((item) => {
			let key = item.key;
			let data = item.val();
			const date = new Date(data.time);
			temperaturesNew.push({
				key: key,
				title: date.toLocaleString(),
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
		<MyLineChart data={chartData} labels={chartLabels} title={props.title} />
	);
};

export default SourceChart;
