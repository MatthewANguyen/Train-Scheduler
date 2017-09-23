// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9RWIaZk2CJoSn8rnQ-0b-im7mKraIZcM",
  authDomain: "employeedatabase-f8ea4.firebaseapp.com",
  databaseURL: "https://employeedatabase-f8ea4.firebaseio.com",
  projectId: "employeedatabase-f8ea4",
  storageBucket: "",
  messagingSenderId: "73250094484"
};
firebase.initializeApp(config);
var database = firebase.database();

$("#submit").on("click", function() {
  event.preventDefault();
  database.ref().push({
    name: $("#name").val().trim(),
    destination: $("#destination").val().trim(),
    time: $("#time").val().trim(),
    frequency: $("#frequency").val().trim(),
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

database.ref().limitToLast(10).on("child_added", function(snapshot) {
    $("<tr>")
      .append($("<td>").html(snapshot.val().name))
      .append($("<td>").html(snapshot.val().destination))
      .append($("<td>").html(snapshot.val().time))
      .append($("<td>").html(snapshot.val().frequency))
      .append($("<td>").html(parseInt(snapshot.val().rate)))
      .appendTo("tbody");
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });