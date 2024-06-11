import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import firebase from 'firebase/compat/app'; // Importe apenas o módulo 'app' do Firebase

// Configure o Firebase com sua configuração
const firebaseConfig = {
  apiKey: "AIzaSyDyR0Hj_oAAZY2st1a0hZEFl_bfV8O9bhk",
  authDomain: "tcc-cycles-a6cca.firebaseapp.com",
  projectId: "tcc-cycles-a6cca",
  storageBucket: "tcc-cycles-a6cca.appspot.com",
  messagingSenderId: "867426805367",
  appId: "1:867426805367:web:12ef396001d700577e8872",
  measurementId: "G-7770K57SFG"

};

firebase.initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));