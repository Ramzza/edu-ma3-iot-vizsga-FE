import React from 'react';

import './App.css';
import StepperSwitch from './components/StepperSwitch';
import LuminosityChart from './components/LuminosityChart';
import TemperatureChart from './components/TemperatureChart';

const App = () => {
	return (
		<div>
			<StepperSwitch />
			<LuminosityChart />
			<TemperatureChart />
		</div>
	);
};

export default App;
