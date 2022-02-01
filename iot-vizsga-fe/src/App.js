import React from 'react';
import { Paper } from '@mui/material';

import './App.css';
import ActionPanel from './components/ActionPanel';
import ActionHistory from './components/ActionHistory';
import SourceChart from './components/SourceChart';
import TemperatureDataService from './services/temperatureService';
import LuminosityDataService from './services/luminosityService';
import HumidityDataService from './services/humidityService';

const styles = {
	myPaper: {
		width: '600px',
		height: '300px',
		margin: '40px',
	},
};

const App = () => {
	return (
		<div>
			<ActionPanel />

			<Paper style={styles.myPaper} elevation={3}>
				<SourceChart
					dataSource={TemperatureDataService}
					label={'Temperature'}
					lineColor={'red'}
					title={'Temperature Chart'}
				/>
			</Paper>
			<Paper style={styles.myPaper} elevation={3}>
				<SourceChart
					dataSource={LuminosityDataService}
					label={'Luminosity'}
					lineColor={'yellow'}
					title={'Luminosity Chart'}
				/>
			</Paper>
			<Paper style={styles.myPaper} elevation={3}>
				<SourceChart
					dataSource={HumidityDataService}
					label={'Humidity'}
					lineColor={'blue'}
					title={'Luminosity Chart'}
				/>
			</Paper>
			<ActionHistory />
		</div>
	);
};

export default App;
