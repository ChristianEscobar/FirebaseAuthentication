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

$("#user-create-btn").on("click", function(event){
	event.preventDefault();
	
	var userEmail = $("#email").val().trim();
	var password = $("#password").val().trim();
	
	createUser(userEmail, password);
});

$("#user-login-btn").on("click", function(event){
  event.preventDefault();

  var userEmail = $("#login-email").val().trim();
  var password = $("#login-password").val().trim();
  
  loginUser(userEmail, password);
});

/* $("#fb-login-button").on("click", function(){
  console.log("click");

  loginWithFacebook();
}); */

function createUser(userEmail, password) {
	// check out:  https://hackernoon.com/promises-and-error-handling-4a11af37cb0e
	authentication.createUserWithEmailAndPassword(userEmail, password)
	.then(() => {
		createNotification("<strong>Create Account</strong>", "success", "glyphicon glyphicon-ok-sign", "top", "Account successfully created.");
	})
	.catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		
		createNotification("<strong>Create Account</strong>", "danger", "glyphicon glyphicon-exclamation-sign", "top", error.message);
	});
}

function loginUser(userEmail, password) {
  authentication.signInWithEmailAndPassword(userEmail, password)
  .then(() => {
    window.location = "homepage.html";
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    createNotification("<strong>Login</strong>", "danger", "glyphicon glyphicon-exclamation-sign", "middle", error.message);
  });
}

/* function loginWithFacebook() {
  var provider = new firebase.auth.FacebookAuthProvider();

  authentication.signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    console.log(user);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...

    console.log(errorCode + " " + errorMessage);
  });
} */

function createNotification(title, type, icon, from, message) {
	$.notify({
		// options
		icon: icon,
		title: title,
		message: message,
	},{
		// settings
		type: type,
		animate: {
			enter: "animated fadeInDown",
			exit: "animated fadeOutUp",
		},
		  placement: {
  		  from: from,
  		  align: "left",
	  },
		  offset: 20,
		  spacing: 10,
      z_index: 1031,
	});
}


