import firebase from '../firebase';

const db = firebase.ref('/Luminosity');

class LuminosityDataService {
	getAll() {
		return db;
	}

	getOne(key) {
		return db.child(key);
	}

	create(tutorial) {
		return db.push(tutorial);
	}

	update(key, value) {
		return db.child(key).update(value);
	}

	delete(key) {
		return db.child(key).remove();
	}

	deleteAll() {
		return db.remove();
	}
}

export default new LuminosityDataService();
