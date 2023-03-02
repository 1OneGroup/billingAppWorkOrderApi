const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyBJ2uhD7-pChRQqzxddfInRxT14uugyBwo",
    authDomain: "billing-ab647.firebaseapp.com",
    projectId: "billing-ab647",
    storageBucket: "billing-ab647.appspot.com",
    messagingSenderId: "859054953131",
    appId: "1:859054953131:web:822dd2b242ff7bb77b9dee",
    measurementId: "G-0HF636DCMS"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const WorkOrder = db.collection("WorkOrder");

// const ElecData = db.collection("Elec_meter");
module.exports = {WorkOrder:WorkOrder}

 