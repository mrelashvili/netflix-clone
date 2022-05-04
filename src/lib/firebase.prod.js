import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
	apiKey: "AIzaSyAUwwJTXuL34qSiHXmb7xk6VOofdb1G6NE",
	authDomain: "netflix-clone-530ff.firebaseapp.com",
	projectId: "netflix-clone-530ff",
	storageBucket: "netflix-clone-530ff.appspot.com",
	messagingSenderId: "1085457408865",
	appId: "1:1085457408865:web:fafdea3acff5171b43db20"
};

const firebase = Firebase.initializeApp(config);

export {firebase};