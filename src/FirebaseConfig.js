import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAktNnFClNrlELhAagzUtjSPgpAnlItd_0',
  authDomain: 'contatobd-17ba7.firebaseapp.com',
  projectId: 'contatobd-17ba7',
  storageBucket: 'contatobd-17ba7.appspot.com',
  messagingSenderId: '199574960000',
  appId: '1:199574960000:web:78bda517464b095a65b365',
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;