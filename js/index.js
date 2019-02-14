let inputInformation = {
		completeName: "",
		email: "",
		password: "",
		passwordConfirmation: "",
		country: "",
		gender: ""
};

function passwordValidation(pass, passConf) {
	if (pass == passConf) {
		//let pattern = new RegExp("(([0-9][A-z]+)+ | ([A-z][0-9]+)+)");
		let pattern = new RegExp("[0-9]+");
		let password = pass;
		return pattern.test(password);
	}
}

function submitLecture() {
	inputInformation.completeName = document.getElementById("nameInput").value;
	inputInformation.email = document.getElementById("emailInput").value;
	inputInformation.password = document.getElementById("passwordInput").value;
	inputInformation.passwordConfirmation = document.getElementById("passwordConfInput").value;
	inputInformation.country = document.getElementById("country").value;
	
	if (passwordValidation(inputInformation.password, inputInformation.passwordConfirmation)) {
		console.log("Same passwords");
	}

	if (document.getElementById("radio1").checked) {
	  inputInformation.gender = document.getElementById('radio1').value;
	}
	if (document.getElementById("radio2").checked) {
		inputInformation.gender = document.getElementById("radio2").value;
	}

	console.log(inputInformation);
}


let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (event)=>{

	event.preventDefault();
	submitLecture();
});

let cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", (event)=>{

});




