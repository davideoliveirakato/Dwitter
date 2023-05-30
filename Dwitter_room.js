var firebaseConfig = {
    apiKey: "AIzaSyDogSAylpRSHiP1QKvhMGCrbLWCcJMMQHY",
    authDomain: "dwitter-5cec0.firebaseapp.com",
    databaseURL: "https://dwitter-5cec0-default-rtdb.firebaseio.com",
    projectId: "dwitter-5cec0",
    storageBucket: "dwitter-5cec0.appspot.com",
    messagingSenderId: "228423378188",
    appId: "1:228423378188:web:1700ffb1857771d0aa1529",
    measurementId: "G-YZM7XEVV64"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");

document.getElementById('user_name').innerHTML = "welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    })

    localStorage.setItem("room_name", room_name);

    window.location = "DwitterPage.html";
}

function getData(){ firebase.database().ref("/").on('value', function(snapshop){
    document.getElementById("output").innerHTML = "";
    snapshop.forEach(function(childSnapshot) {
        childkey = childSnapshot.key;
        Room_names = childKey;
        console.log("room name -" + Room_names)
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
        
    });
})}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
        window.location = "DwitterPage.html"
}

function sair() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}