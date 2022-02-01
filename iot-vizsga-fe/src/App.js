import React from 'react';
import { Paper, Grid } from '@mui/material';

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
		margin: '10px',
	},
};

const App = () => {
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<ActionPanel />
				</Grid>
				<Grid item xs={4}>
					<Paper style={styles.myPaper} elevation={3}>
						<SourceChart
							dataSource={TemperatureDataService}
							label={'Temperature'}
							lineColor={'red'}
							title={'Temperature Chart'}
						/>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper style={styles.myPaper} elevation={3}>
						<SourceChart
							dataSource={LuminosityDataService}
							label={'Luminosity'}
							lineColor={'yellow'}
							title={'Luminosity Chart'}
						/>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper style={styles.myPaper} elevation={3}>
						<SourceChart
							dataSource={HumidityDataService}
							label={'Humidity'}
							lineColor={'blue'}
							title={'Humidity Chart'}
						/>
					</Paper>
				</Grid>

				<Grid item xs={8}>
					<ActionHistory />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
