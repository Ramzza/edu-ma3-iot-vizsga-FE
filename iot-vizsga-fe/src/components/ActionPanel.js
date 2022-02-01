import React, { useState } from 'react';
import Button from '@mui/material/Button';

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
			<div>Switch_ON: {switchState}</div>
			<div>
				ROTATE_STEPPER: {stepperWorking}{' '}
				<Button variant="contained" onClick={changeRotateStepper}>
					change
				</Button>
			</div>
			<div>
				STEPPER_DIRECTION: {stepperDirection}{' '}
				<Button variant="contained" onClick={changeStepperDirection}>
					change
				</Button>
			</div>
			<div>
				IR_LED_SWITCH: {irLedSwitch}{' '}
				<Button variant="contained" onClick={changeIrLedSwitch}>
					change
				</Button>
			</div>
		</div>
	);
};

export default ActionPanel;
