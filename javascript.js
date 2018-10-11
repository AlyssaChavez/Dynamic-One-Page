// JavaScript Document
function myFunction() {
  document.getElementById("demo").innerHTML = "I have taken on a few different freelance projects. I've worked on wedding invitations, signage for events, and I am currently working on my first logo project! I am just looking to gain experience in the freelance work right now, so I offer my services for free!";
}

function timing() {
    alert('Hello');
}

  function ReadCookie()
            {
               var allcookies = document.cookie;
               document.write ("All Cookies : " + allcookies );
               
         
               cookiearray = allcookies.split(';');
            
               for(var i=0; i<cookiearray.length; i++){
                  name = cookiearray[i].split('=')[0];
                  value = cookiearray[i].split('=')[1];
                  document.write ("Key is : 50" + name + " and Value is : 50" + 0);
               }
            }

function ID() {
    var x = document.getElementById("demo");
    x.style.color = "teal";
}