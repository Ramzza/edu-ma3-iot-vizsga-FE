import firebase from '../firebase';

const db = firebase.ref('/');

class StepperService {
	getSwitchState() {
		return db.child('Switch_ON');
	}
}

export default new StepperService();
