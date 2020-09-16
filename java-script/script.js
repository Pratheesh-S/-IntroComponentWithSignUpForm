const fName=document.getElementById("f-name")
const lName=document.getElementById("l-name")
const mail=document.getElementById("mail")
const password=document.getElementById("password")
const fNameInvalid=document.getElementById("f-invalid")
const lNameInvalid=document.getElementById("l-invalid")
const mailInvalid=document.getElementById("mail-invalid")
const passwordInvalid=document.getElementById("pass-invalid")
const formEle=document.querySelector("form")

formEle.addEventListener("submit" ,function(e)
{
  e.preventDefault();
  checkFName();
  checkLName();
  checkMail();
  checkPassword();
})
const checkFName=()=>
{
    if(fName.value.trim()=="")
    {
        fNameInvalid.style.visibility="visible";

    }
    else{
        fNameInvalid.style.visibility="hidden";
    }

}
const checkLName=()=>
{
    if(lName.value.trim()=="")
    {
        lNameInvalid.style.visibility="visible";

    }
    else{
        lNameInvalid.style.visibility="hidden";
    }

}
const checkMail=()=>
{
    
    var regx=/([a-zA-Z0-9\.-])@([a-zA-Z0-9-]).([a-z{2,5}])/;
    if(mail.value.trim()=="")
    {
        mailInvalid.style.visibility="visible";

    }
    else if(regx.test(mail.value))
    {
        mailInvalid.style.visibility="hidden";
 
    }
    else{
        mailInvalid.style.visibility="visible";

    }
}
const  checkPassword=()=>
{
    if(password.value.trim()=="")
    {
        passwordInvalid.style.visibility="visible";

    }
    else
    if(password.value.length<8)
    {
        passwordInvalid.style.visibility="visible";
    }
    else
    {
        passwordInvalid.style.visibility="hidden";

    }

}
