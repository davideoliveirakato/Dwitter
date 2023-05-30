function addUser(){

    userName = document.getElementById("userName").value;

    localStorage.setItem("username", userName);

    window.location = "Dwitter_room.html";
}