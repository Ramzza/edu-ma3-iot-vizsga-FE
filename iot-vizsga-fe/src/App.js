import React from 'react';

import './App.css';
import LuminosityChart from './components/LuminosityChart';
import TemperatureChart from './components/TemperatureChart';

const App = () => {
	return (
		<div>
			<LuminosityChart />
			<TemperatureChart />
		</div>
	);
};

export default App;
