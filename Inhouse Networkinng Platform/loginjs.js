function validate()
{
var Username=document.getElementById("Username").value;
var Password=document.getElementById("Password").value;
if(Username=="admin"&& Password=="user")
{
    location="edit-index.html"
    alert('login succesfull');
    return false;
}
else
{
    alert('Incorrect Credentials');
}


}