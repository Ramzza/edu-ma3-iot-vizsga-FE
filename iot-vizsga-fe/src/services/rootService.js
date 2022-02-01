import firebase from '../firebase';

const db = firebase.ref('/');

class RootService {
	getSwitchState() {
		return db.child('Switch_ON');
	}

	getStepperWorking() {
		return db.child('ROTATE_STEPPER');
	}

	getStepperDirection() {
		return db.child('STEPPER_DIRECTION');
	}

	getIrLedSwitch() {
		return db.child('IR_LED_SWITCH');
	}
}

export default new RootService();
