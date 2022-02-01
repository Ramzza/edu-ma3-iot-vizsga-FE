import firebase from '../firebase';

const db = firebase.ref('/');

class RootService {
	getSwitchState() {
		return db.child('Switch_ON');
	}

	getStepperWorking() {
		return db.child('ROTATE_STEPPER');
	}

	setStepperWorking(value) {
		return db.child('/').update({ ROTATE_STEPPER: value });
	}

	getStepperDirection() {
		return db.child('STEPPER_DIRECTION');
	}

	setStepperDirection(value) {
		return db.child('/').update({ STEPPER_DIRECTION: value });
	}

	getIrLedSwitch() {
		return db.child('IR_LED_SWITCH');
	}

	setIrLedSwitch(value) {
		return db.child('/').update({ IR_LED_SWITCH: value });
	}
}

export default new RootService();
