const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
let signInForm = document.getElementById("signInFormMain");
let email = document.getElementById("email");
let passWord = document.getElementById("password");
let errorMessage = document.getElementsByClassName("errorMsg");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());



let formEngine = function (id, number, message){
    if(id.value.trim() === ""){
        errorMessage[number].innerHTML = message;    
    } else{
        errorMessage[number].innerHTML = "";     
    }
}

signInForm.addEventListener("submit", function(e){
   
    if (formEngine) {
		window.location.assign("../payment.html")
	} else {
	formEngine(email, 0, "Email should not be blank");
    formEngine(passWord, 1, "Password must contain letter and numbers");
	}
})