
        function login()
        {
            var email=document.getElementById("email1").value
            var password=document.getElementById("password1").value
            /*email*/
        if(email=="")
        {
            document.getElementById("message5").innerHTML="**Please Fill The Email"
            return false;
        }
        else
        {
            document.getElementById("message5.1").innerHTML="**User Name Matched"
            document.getElementById("message5").style.display="none";
        }
        /*password*/

        if(password=="")
        {
            document.getElementById("message6").innerHTML="**Please Fill The Password"
            return false;
        }
        else
        {
            document.getElementById("message5")
        }
        alert("You have Logged in sucessufully");

    }

 
    function signup()
    {
        var username=document.getElementById("name").value;
        var email=document.getElementById("email").value
        var password=document.getElementById("password").value;
        var cpassword=document.getElementById("Confirm-Password").value;
       
        /*username*/
        if(username=="")
        {
            document.getElementById("message1").innerHTML="**Please Fill The Username"
            return false;
        }
        else
        {
        document.getElementById("message1.1").innerHTML="**User Name Matched"
        document.getElementById("message1").style.display="none";
        }

        /*email*/
        if(email=="")
        {
            document.getElementById("message2").innerHTML="**Please Fill The email"
          return false;
        }
        else
        {
            document.getElementById("message2.2").innerHTML="**Email is matched"
            document.getElementById("message2").style.display="none";
        }

        /*password*/
        if(password=="")
        {
            document.getElementById("message3").innerHTML="**Please fill the Password"
            return false;
        
        }
        if(password.length<4)
        {
            document.getElementById("message3").innerHTML="**Password length must me be greater than 4 Characters"
            return false;
        }
        else
        {
            document.getElementById("message3").style.display="none";
        }

        /*Confirm password*/
        if(cpassword=="")
        {
            document.getElementById("message4").innerHTML="**Please Fill The Confirm-Password"
            return false;
          
        }
        if(password!=cpassword)
        {
            document.getElementById("message4").innerHTML="*Your Password is Not Matching"
            return false;
        }
        else
        {
            
            
           
              document.getElementById("message4").style.display="none"

        }
        
         alert("Thank you for Signing")
    }








