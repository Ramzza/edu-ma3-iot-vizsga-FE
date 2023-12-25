import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';

import RootService from '../services/rootService';

const ActionPanel = () => {
	const [switchState, setSwitchState] = useState(-1);
	const [stepperWorking, setStepperWorking] = useState('');
	const [stepperDirection, setStepperDirection] = useState('');
	const [irLedSwitch, setIrLedSwitch] = useState('');

	const onSwitchChange = (item) => {
		const val = item.val();
		if (val !== switchState) {
			setSwitchState(val);
		}
	};

	const onStepperWorkingChange = (item) => {
		const val = item.val();
		if (val !== stepperWorking) {
			setStepperWorking(val);
		}
	};

	const onStepperDirectionChange = (item) => {
		const val = item.val();
		if (val !== stepperDirection) {
			setStepperDirection(val);
		}
	};

	const onIrLedSwitchChange = (item) => {
		const val = item.val();
		if (val !== irLedSwitch) {
			setIrLedSwitch(val);
		}
	};

	const changeRotateStepper = () => {
		const cmd = stepperWorking === 'ON' ? 'OFF' : 'ON';
		RootService.setStepperWorking(cmd);
	};

	const changeStepperDirection = () => {
		const cmd = stepperDirection === 'RIGHT' ? 'LEFT' : 'RIGHT';
		RootService.setStepperDirection(cmd);
	};

	const changeIrLedSwitch = () => {
		const cmd = irLedSwitch === 'ON' ? 'OFF' : 'ON';
		RootService.setIrLedSwitch(cmd);
	};

	RootService.getSwitchState().on('value', onSwitchChange);
	RootService.getStepperWorking().on('value', onStepperWorkingChange);
	RootService.getStepperDirection().on('value', onStepperDirectionChange);
	RootService.getIrLedSwitch().on('value', onIrLedSwitchChange);

	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					Switch_ON:
				</Grid>
				<Grid item xs={10}>
					{switchState}
				</Grid>

				<Grid item xs={2}>
					ROTATE_STEPPER:
				</Grid>
				<Grid item xs={1}>
					{stepperWorking}
				</Grid>
				<Grid item xs={9}>
					<Button variant="contained" onClick={changeRotateStepper}>
						change
					</Button>
				</Grid>

				<Grid item xs={2}>
					STEPPER_DIRECTION:
				</Grid>
				<Grid item xs={1}>
					{stepperDirection}
				</Grid>
				<Grid item xs={9}>
					<Button variant="contained" onClick={changeStepperDirection}>
						change
					</Button>
				</Grid>

				<Grid item xs={2}>
					IR_LED_SWITCH:
				</Grid>
				<Grid item xs={1}>
					{irLedSwitch}
				</Grid>
				<Grid item xs={9}>
					<Button variant="contained" onClick={changeIrLedSwitch}>
						change
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default ActionPanel;
