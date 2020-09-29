
function formValidator(){
	var username = document.preorder.username.value;
	var password = document.preorder.password.value;
	var checkbox = document.preorder.checkbox.checked;
	var email = document.preorder.email.value;
	var quantity = document.preorder.quantity.value;
	

	if(username == null || username == ""){
		alert("Name must be filled!");
		return false;
	}
	else if(email == null || email == ""){
		alert("Email must be filled!");
		return false;
	}
	else if(password == null || password == ""){
		alert("Password must be filled!");
		return false;
	}
	else if(username.length < 5){
		alert("Minimal name length is 5 chars!");
		return false;
	}
	else if(!email.includes("@")){
		alert("Email must have '@'");
		return false;
	}
	else if(password.length < 8){
		alert("Minimal password length is 8 chars!");
		return false;
	}
	else if(quantity < 1 || quantity > 99){
		alert("Number of copies must between 1 - 99!")
	}
	else if(checkbox == false){
		alert("You must check the terms & conds!");
		return false;
	}
	else{
		alert("Success!");
		return true;
	}
	return true;
}