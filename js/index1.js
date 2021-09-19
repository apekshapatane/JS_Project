function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if ( uname == "Admin" && pwd == "Admin@123")
		{
			alert ("Login successfully");
			window.location = "js/success.html"; // Redirecting to other page.
			return false;
			}
        if ((uname == null || uname == "") && (pwd == null || pwd== "") )

         {

            alert("Please enter the username & password.");

            return false;

        }
       
		else if(!filter.test(uname))
		{
			alert("Please Enter Username.");
		}
		else if(pwd.length < 6 || pwd.length > 6)
		{
			alert("Please Enter Password.");
		}
		else
		{
	alert('Thank You for Login');
  
       window.location = "success.html";
			}
	}
	
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}	
	
