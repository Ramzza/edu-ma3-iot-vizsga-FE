import React, { useState } from 'react';
import StepperService from '../services/stepperService';

const StepperSwitch = () => {
	const [switchState, setSwitchState] = useState(1);

	const onDataChange = (item) => {
		const sw = item.val();
		if (sw != switchState) {
			setSwitchState(sw);
		}
	};

	StepperService.getSwitchState().on('value', onDataChange);

	return <div>Switch_ON: {switchState}</div>;
};

export default StepperSwitch;
