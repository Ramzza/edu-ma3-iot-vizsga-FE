import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

let config = {
	apiKey: 'xxx',
	authDomain: 'iot-vizsga-79c97-default-rtdb.europe-west1.firebasedatabase.app',
	databaseURL:
		'https://iot-vizsga-79c97-default-rtdb.europe-west1.firebasedatabase.app/',
	projectId: 'iot-vizsga-79c97',
	storageBucket: 'bezkoder-firebase.appspot.com',
	messagingSenderId: 'xxx',
	appId: 'xxx',
};

firebase.initializeApp(config);
var db = firebase.database();

export default db;
