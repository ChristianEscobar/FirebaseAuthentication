// Initialize Firebase
var config = {
	apiKey: "AIzaSyBIkr61uj-EI2j6iOvSRxmPaMIsMDNf-nA",
	authDomain: "sandbox-8d484.firebaseapp.com",
	databaseURL: "https://sandbox-8d484.firebaseio.com",
	projectId: "sandbox-8d484",
	storageBucket: "sandbox-8d484.appspot.com",
	messagingSenderId: "319474456094"
};

firebase.initializeApp(config);

var database = firebase.database();
var authentication = firebase.auth();

$("#user-logout-btn").on("click", function(){
  userSignout();
});

authentication.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user);

    $("#user-email").text(user.email);
    $("#user-uid").text(user.uid);

    /* var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var pr */oviderData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

function userSignout(){
  authentication.signOut().then(function() {
    console.log("You have signed out");
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode + " " + errorMessage);
  });
}

