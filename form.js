const form = document.getElementById('form');
const username  = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('pnumber');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//more email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol<1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length-1) return false;
    return true;
}

//define the validate function
const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    const sendData = ( sRate,count ) => {
        if(sRate === count){
            alert('registration successful')
            swal("Welcome!","Registration Successful","success")

        }

    }

    //for final data validation
    const successMsg = () => {
         let formItemAll =document.getElementsByClassName('form-item');

         var count = formItemAll.length-1;
         for( var i=0 ; i < formItemAll.length ; i++ ){
            if(formItemAll[i].className === "form-item success"){
                var sRate = 0 + i;
                console.log( sRate);
                sendData(sRate,count);
            } 
         }
    }

    //validate username
    if(usernameVal === ""){
       setErrorMsg( username,'username cannot be blank');
    }else if(usernameVal.length <= 2){
       setErrorMsg( username,'username min 3 char');
    }else{
        setSuccessMsg(username);
    }

    //validate email
    if(emailVal === ""){
       setErrorMsg( email,'email cannot be blank');
    }else if(!isEmail(emailVal)){
       setErrorMsg( email,'Not a valid email');
    }else{
        setSuccessMsg(email);
    }

    //validate phone
    if(phoneVal === ""){
        setErrorMsg(phone,'phone cannot be blank');
     }else if(phoneVal.length != 10){
        setErrorMsg( phone,'Not a valid phone num');
     }else{
         setSuccessMsg(phone);
     }

     //validate password
    if(passwordVal === ""){
        setErrorMsg(password,'password cannot be blank');
     }else if(passwordVal.length <= 5){
        setErrorMsg( password,'Minimum 6 char');
     }else{
         setSuccessMsg(password);
     }

     //validate cpassword
     if(cpasswordVal === ""){
        setErrorMsg(cpassword,'cpassword cannot be blank');
     }else if(passwordVal !== cpasswordVal){
        setErrorMsg( cpassword,'password are not matching');
     }else{
         setSuccessMsg(cpassword);
     }

     successMsg();

}

function setErrorMsg( input, errormsgs){
    const formItem = input.parentElement;
    const small = formItem.querySelector('small');
    formItem.className = "form-item error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formItem = input.parentElement;
    formItem.className = "form-item success";
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
})