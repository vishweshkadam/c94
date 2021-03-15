
var firebaseConfig = {
      apiKey: "AIzaSyAvw8ga4H2gbUUVFfvxIaOpdKde31BHJq0",
      authDomain: "kwitter--web-app.firebaseapp.com",
      databaseURL: "https://kwitter--web-app-default-rtdb.firebaseio.com",
      projectId: "kwitter--web-app",
      storageBucket: "kwitter--web-app.appspot.com",
      messagingSenderId: "140618419729",
      appId: "1:140618419729:web:bec01778959c2677782bb0"
    };
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user name");
    document.getElementById("username").innerHTML="WELCOME " +user_name+"!";


function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {document.getElementById("").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     row="<div class='room_name' id="+ Room_names +"onclick='' >#"+ Room_names +"</div> <hr>";
     document.getElementById("").innerHTML+=row;
      });});}

 
