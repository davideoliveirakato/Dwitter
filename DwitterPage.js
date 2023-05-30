//LINKS FIREBASE
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
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name: user_name,
                  message:msg,
                  like:0
            })
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; 
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código 
            console.log(firebaseMessageId);
            console.log(messageData)
            name = messageData['name'];
            message = messageData['message'];
            like = messageData['like']
            nameWithTag = "<h4> "+ name +"<img class='user_tick' src='lido.png'></h4>"; 
            messageWithtag ="<h4 class='messageH4'>"+ message + "</h4>";
            likeButton = "<button class='btn bt' id="+firebaseMessageId+" value="+ like +" onclick='updateLike(this.id)'>";
            spanWithTag ="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like + like +"</span><button> </button><hr>";

            row = nameWithTag + messageWithtag +likeButton + spanWithTag;
            document.getElementById("output").innerHTML += row;
            
//Fim do código
      } });  }); }
getData();

function updateLike(messageId)
{
      console.log("clickeck on like button - " + messageId);
      buttonId = messageId;
      likes = document.getElementById("buttonId").value;
      updateLike = Number(likes) + 1;
      console.log(uptade_likes);

      firebase.database().ref(room_name).chid(messageId).update({
     });
}
function sair() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }



