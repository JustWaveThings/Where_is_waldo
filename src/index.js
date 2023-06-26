/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import './style.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, query, where, orderBy, onSnapshot, deleteDoc, addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDHbAqh5qZOjfDBB4J4VnbcN6-gwBfdS3I',
  authDomain: 'library-add-firebase.firebaseapp.com',
  projectId: 'library-add-firebase',
  storageBucket: 'library-add-firebase.appspot.com',
  messagingSenderId: '1044075796113',
  appId: '1:1044075796113:web:da6200fcfae6fb706d1130',
};

initializeApp(firebaseConfig);

const db = getFirestore();
