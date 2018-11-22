var firebase = require('firebase');
firebase.initializeApp({ 
     serviceAccount:'./chatbot-45751-59c2f3ba3a5d.json',
    databaseURL:"https://chatbot-45751.firebaseio.com/"
 });

var ref = firebase.database().ref('chatbot-45751')

var messageRef=ref.child('ProductCart');

var data={
    name:'something',
    number:5
}
messageRef.push(data);
