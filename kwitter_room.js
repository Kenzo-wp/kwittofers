var firebaseConfig = {
      apiKey: "AIzaSyB4T3R4z92XOPg7EXzSkAy38A6IpIEEHaA",
      authDomain: "kwitter-fbaa2.firebaseapp.com",
      databaseURL: "https://kwitter-fbaa2-default-rtdb.firebaseio.com",
      projectId: "kwitter-fbaa2",
      storageBucket: "kwitter-fbaa2.appspot.com",
      messagingSenderId: "137834378197",
      appId: "1:137834378197:web:b7b1d389d2bb6f065d435c"
    };
    
    app = initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!"

    function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log ("Room name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}