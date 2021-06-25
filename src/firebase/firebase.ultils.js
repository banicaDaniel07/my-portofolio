import publicIp from "public-ip";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const getClientIp = async () => await publicIp.v4({
  fallbackUrls: [ "https://ifconfig.co/ip" ]
});



const config = {
    apiKey: "AIzaSyCv5sH2DxGrf655ih0oT4mtOHIJWz3gcqM",
    authDomain: "my-portfolio-d26f7.firebaseapp.com",
    projectId: "my-portfolio-d26f7",
    storageBucket: "my-portfolio-d26f7.appspot.com",
    messagingSenderId: "863274370491",
    appId: "1:863274370491:web:f1357cb71292c0bb75709e",
    measurementId: "G-439CF7FEFB"
};

firebase.initializeApp(config);


const getDayAndMonth = (date) => {
    const day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    month = month < 10 ? '0'+month : month;

    return `${day}.${month}.${year}`;
}



export const addDataToDatabase = async () => {

    const openedAt = new Date();
    const dayAndMonth = getDayAndMonth(openedAt);
    const openId = openedAt.getTime();

    const openRef = firestore.doc(`${dayAndMonth}/${openId}`);
    
    const snapShot = await openRef.get();
    
    if(!snapShot.exists){
      try {
        const openIP = await getClientIp();
        await openRef.set({
            openIP,
            openedAt 
        });
      } catch (error) {
        console.log(`Error adding doc ${openId} `, error.message);
      }
  }

 
};




export const firestore = firebase.firestore();

export default firebase;