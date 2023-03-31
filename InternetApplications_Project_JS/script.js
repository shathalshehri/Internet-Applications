function LogInVerify() {
    
    var email = document.forms["form"]["email"].value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/; 
    var password =document.forms["form"]["password"].value; 
    var message= document.getElementById("message");
	//var message2= document.getElementById("message2");
     if (email == "") {
		     message.textContent = "Please enter your email"  //TO WORN THE USER THAT THE EMAIL IS EMPTY
             message.style.color = "red" // DISPLAY THE MESSAGE IN RED COLOR
			 
                 return false;
             }
    else if (!(email.match(mailformat))) {
      var message= document.getElementById("message")
		    message.textContent = "Please enter a valid email"  //TO TELL THE USER THAT THE EMAIL IS INVALID 
            message.style.color = "red" // DISPLAY THE MESSAGE IN RED COLOR
                 return false;
    }
	 else if (password == "") {
        
		     message.textContent = "Please enter your password"  // TO WORN THE USER THAT THIS FEILD MUST BE FILLED
            message.style.color = "red" //DISPLAY THE TEXT IN RED
                 return false;
    }
             else {
                 alert("Registration completed");
                 return true;  //ALERT POPS UP TO THE USER WHEN THE REGISTERATION IS DONE SUCCESSFULLY
             }
}
			 function setCookie() {
			 if (document.form.checkbox.checked) 
              {
                  // Get the date and set it to next year
                  var expDate = new Date();
                  expDate.setFullYear(expDate.getFullYear() + 1);
                  var who = document.form.email.value;
                  document.cookie = "email=" + who + ";" +
                  "expires=" + expDate.toGMTString();
              } 
              else 
              {
                  deleteCookie();
              }
              return true;
          }
          
          function readCookie() {
             if (document.cookie) {
                var theCookie = document.cookie;
                var pos = theCookie.indexOf("email=");
                if (pos != -1) {
                  var cookie_array = theCookie.split("=");
                  var value = cookie_array[1];
                  // Load the stored email into the form
                  document.form.email.value=value;
                  document.form.checkbox.checked=true;
                }
              }
          }
		  function deleteCookie() {
              if (document.cookie) {
                  // Get a date and set it to last year
                  var expDate = new Date();
                  expDate.setFullYear(expDate.getFullYear() - 1);
                  document.cookie = "email=" + "" + ";" +
                  "expires=" + expDate.toGMTString();
              }
          }
		  function validate() {
	
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var subject = document.getElementById("subject").value;
  var email = document.forms["form"]["email"].value;
  var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  var error_message = document.getElementById("error_message");
    
  var text;
  if(fname == ""){
    text = "Please Enter First Name"; //TO WORN THE USER THAT HIS/HER NAME IS EMPTY
    error_message.innerHTML = text;
	error_message.style.color = "red"; //DISPLAY THE TEXT/MESSAGE IN RED COLOR
    return false;
  }
 else if(lname == ""){
    text = "Please Enter Last Name"; //TO WORN THE USER THAT HIS/HER LAST NAME IS EMPTY
    error_message.innerHTML = text;
	error_message.style.color = "red"; //DISPLAY THE TEXT/MESSAGE IN RED COLOR
    return false;
  }
  if (email == "") {
text = "Please Enter Email"; //TO WORN THE USER THAT THE EMAIL IS EMPTY
    error_message.innerHTML = text;
  error_message.style.color = "red";  //DISPLAY THE TEXT/MESSAGE IN RED COLOR
  return false;
             }
  else if( !(email.match(mailformat)) ) {
    text = "Please Enter valid Email"; //TO TELL THE USER THAT THE EMAIL IS INVALID 
    error_message.innerHTML = text;  
	error_message.style.color = "red";  //DISPLAY THE TEXT/MESSAGE IN RED COLOR
    return false;
  }
   
  else if(subject == ""){
	   text = "Please Enter Some Text"; //TO WORN THE USER THAT THE TEXTAREA IS EMPTY SO THE USER CAN CONTACT US 
    error_message.innerHTML = text;
	error_message.style.color = "red"; // DISPLAY THE WARNNING IN RED COLOR
    return false;
  }
  else{
  alert("Registered Successfully!"); 
  return true;
} //ALERT POPS UP TO THE USER WHEN THE REGISTERATION IS DONE SUCCESSFULLY
  }
		  function change_back(x){
		  x.style.backgroundColor = 'white'; 
		  x.style.color = 'black';
		  }
