import style1 from './styles/loginRegisterStyles.css';
import style2 from './styles/registerStyles.css';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup , createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// document.addEventListener('DOMContentLoaded', () => {

//   let bodyId = document.body.id;

//   console.log('xxd!', bodyId)

//   if(bodyId === 'afterLogin'){
//     console.log('Jestes na afterLogin')
//   }else if(bodyId === 'index'){
//     console.log('Jesteś na index.html')
//   }

// })

class AuthForm {
  constructor(){
    this.firebaseConfig = {
      apiKey: "AIzaSyAf9sTWe5zdpn8LPyfphCrauqqgYiGt5Mg",
      authDomain: "foodly-84219.firebaseapp.com",
      projectId: "foodly-84219",
      storageBucket: "foodly-84219.appspot.com",
      messagingSenderId: "555670999166",
      appId: "1:555670999166:web:8786d898ddc5b6ce22c82f"
    };
    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();
    /// DOM Nodes Index.html:
    this.google = document.querySelector('.google');
    this.ee = document.querySelector('section');
    this.register = document.querySelector('.register');
    this.logOut = document.querySelector('.signOut');
    /// DOM Nodes Register.html
    
  };

  signWithPopup(){
    this.google.addEventListener('click', (e) => {
      e.preventDefault();
    
     signInWithPopup(this.auth, this.provider)
      .then( (result) => {
        console.log(`${result.user.displayName} is logged in via google account`);
      })
      .catch( (err) => {
          console.log(err.message, err);
      });
    
    });
  };

  register1Event(){
    this.register.addEventListener('click', (e) => {
      window.location.assing('./register2.html');
    });
  };

  creatingUser(){
    this.imputRegisterMail = document.querySelector('.registering2');
    this.imputRegisterMail.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(this.imputRegisterMail.email.value, this.imputRegisterMail.password.value);
      createUserWithEmailAndPassword(this.auth, this.imputRegisterMail.email.value, this.imputRegisterMail.password.value)
        .then( credential => {
          const user = credential.user;
          console.log(`Registereg as ${user.name}`);
          window.location.assign('./afterLogin.html');
        })
        .catch(err => console.log(err.message));
      });
  };

  signOut(){
    this.logOut.addEventListener('click', (e) => {
      e.preventDefault();
      signOut(this.auth);
    });
  };

  HTMLIdentifier(){
    document.addEventListener('DOMContentLoaded', () => {
      let bodyId = document.body.id;

      switch(bodyId){
        case 'index':
          console.log('Jesteś na index.html');
          this.signWithPopup();
          this.register1Event();
          this.signOut();
          break;
        case 'register':
          this.creatingUser();
          break;
        case 'afterLogin':
          console.log('Jestes na afterLogin');
          break;
        default:
          console.log('Nie wiadomo gdzie jesteś :S');
      };
    });
  };

  userStateChangeListener(){
    this.auth.onAuthStateChanged( (user) => {
      if(user){
        console.log(user);
        // window.location.assing('./afterLogin.html')
    
      }else{
        console.log("Noone is logged");
      }
    })
  }
};

//// Invoking methods /////
const classs = new AuthForm();

classs.HTMLIdentifier();
classs.userStateChangeListener();

