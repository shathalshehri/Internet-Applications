//Use this function to validate the form of login input
function LogInVerify() {
    var email = document.forms["form"]["email"].value;//to get email value from the form
	var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;//email format
    var password =document.forms["form"]["password"].value;//to get password value from the form 
    var message= document.getElementById("message");//to get message value from the form and be able to change its value
	var rememberMe= document.getElementById("checkbox");
	if (email == "") {//check if the email field is empty
		     message.textContent = "Please enter your email" //set new value to message to tell the user that the email field is empty
             message.style.color = "red" //display the message in red color
                 return false;
             }
    else if (!(email.match(mailformat))) {//check if the email not follows the correct format
		    message.textContent = "Please enter a valid email" //set new value to message to tell the user that the email format is not valid
            message.style.color = "red" //display the message in red color
                 return false;
    }
	 else if (password == "") {//check if the password field is empty
		     message.textContent = "Please enter your password" //set new value to message to tell the user that the password field is empty
            message.style.color = "red" //display the message in red color
                 return false;
    }
             else {//if the user enter every things correctly
				 alert("Registration completed");//alert tell the user that registration done
				 window.location.href = 'index.html';/// redirect the user to index page
                 return false; 
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
		  //Use this function to validate the form of SignUp input
		  function SignUpVerify() {
    
    var name = document.forms["form2"]["name"].value;//to get name value from the form
	var email = document.forms["form2"]["email"].value;//to get email value from the form
	var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;//email format
    var password =document.forms["form2"]["password"].value; //to get password value from the form 
	var Cpassword =document.forms["form2"]["Cpassword"].value; //to get password confirmation value from the form 
    var message2= document.getElementById("message2");//to get message value from the form and be able to change its value
	      if(name==""){//check if the name is empty
			 message2.textContent = "Please enter your Name" //set new value to message to tell the user that the name field is empty
             message2.style.color = "red" //Display the message in red color
			 return false;
		  }
     else if (email == "") {//check if the email is empty
		     message2.textContent = "Please enter your email" //set new value to message to tell the user that the email field is empty
             message2.style.color = "red" //Display the message in red color
			 
                 return false;
             }
    else if (!(email.match(mailformat))) {//check if the email not follows the correct format
		    message2.textContent = "Please enter a valid email" //set new value to message to tell the user that the email format is not valid
            message2.style.color = "red"//Display the message in red color
                 return false;
    }
	 else if (password == "") {//check if the password is empty
        
		     message2.textContent = "Please enter your password" //set new value to message to tell the user that the password field is empty
            message2.style.color = "red" //Display the message in red color
                 return false;
    }
	else if(Cpassword==""){//check if the password confirmation is empty
	        message2.textContent = "Please Confirm your password "//set new value to message to tell the user that the password confirmation field is empty
            message2.style.color = "red"//Display the message in red color 
		  return false;
	} 
		  else if(password != Cpassword){//check if the password confimation equal password
			  message2.textContent = "Password confimation does not match " //set new value to message to tell the user that password confimation not equal password
            message2.style.color = "red"//Display the message in red color  
			return false;
		  }
             else {
                 alert("Registration completed");//alert tell the user that registration done
				 window.location.href = 'index.html';//redirect the user to index page
                 return false; 
             }
}
         //Use this function to validate the form of SignUp input
		  function validate() {
	
  var fname = document.getElementById("fname").value;//to get first name value from the form
  var lname = document.getElementById("lname").value;//to get last name value from the form
  var subject = document.getElementById("subject").value;//to get subject value from the form
  var email = document.forms["form"]["email"].value;//to get email value from the form
  var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;//email format
  var error_message = document.getElementById("error_message");//to get error_message value from the form and be able to change its value
    
  var text;//contain the text of error_message
  if(fname == ""){//check if the first name is empty
    text = "Please Enter First Name"; //TO WORN THE USER THAT HIS/HER NAME IS EMPTY
    error_message.innerHTML = text;//set a new text value to error_message
	error_message.style.color = "red"; //DISPLAY THE TEXT/MESSAGE IN RED COLOR
    return false;
  }
 else if(lname == ""){//check if the last name is empty
    text = "Please Enter Last Name"; //TO WORN THE USER THAT HIS/HER LAST NAME IS EMPTY
    error_message.innerHTML = text; //set a new text value to error_message
	error_message.style.color = "red"; //DISPLAY THE TEXT/MESSAGE IN RED COLOR
    return false;
  }
  if (email == "") {//check if the email name is empty
text = "Please Enter Email"; //TO WORN THE USER THAT THE EMAIL IS EMPTY
    error_message.innerHTML = text; //set a new text value to error_message
  error_message.style.color = "red";  //DISPLAY THE TEXT/MESSAGE IN RED COLOR
  return false;
             }
  else if( !(email.match(mailformat)) ) {//check if the email not follows the correct format
    text = "Please Enter valid Email"; //TO TELL THE USER THAT THE EMAIL IS INVALID 
    error_message.innerHTML = text;  //set a new text value to error_message
	error_message.style.color = "red";  //DISPLAY THE TEXT/MESSAGE IN RED COLOR
    return false;
  }
   
  else if(subject == ""){//check if the textarea is empty
	   text = "Please Enter Some Text"; //TO WORN THE USER THAT THE TEXTAREA IS EMPTY SO THE USER CAN CONTACT US 
    error_message.innerHTML = text; //set a new text value to error_message
	error_message.style.color = "red"; // DISPLAY THE WARNNING IN RED COLOR
    return false;
  }
  else{//if the user inter all input correctly
  alert("Form Submitted Successfully!"); //ALERT POPS UP TO THE USER WHEN THE REGISTERATION IS DONE SUCCESSFULLY
  return true;
}
  }
		  //Use this function to make Onfocus event
		  function focusFunction(x) {
          x.style.background = "yellow";//Set the background color to yellow
          }
		  //use this function to make OnBlur event
		  function blurFunction(x) {
          x.style.background = 'white';//set the back ground color to white
          }
		  