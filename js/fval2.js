function get(){
    let fullname=document.getElementById("fname").value
    let email=document.getElementById("ema").value
    let package=document.getElementById("pack").value
    let date=document.getElementById("date").value
    let nperson=document.getElementById("np").value
    let boarding=document.getElementById("boar").checked
    let fooding=document.getElementById("food").checked
    let sightseeing=document.getElementById("ss").checked
    let iagree=document.getElementById("ia").checked
    let idisagree=document.getElementById("id").checked
    let aregex=/^[A-Z a-z]{2,20}$/
    let eregmax=/^[A-Z a-z0-9._]+@[A-Za-z0-9]+\.[a-z]{2,4}$/
    let pregex=/^[0-9]$/
    if(fullname==""){
        alert("enter your full name")
        return false;
    }
    else if(!fullname.match(aregex)){
        alert("enter valid name")
        return false
    }
    else if(email==""){
        alert("enter your email")
        return false;
    }
    else if(!email.match(eregmax)){
        alert("enter valid email")
        return false
    }
    else if(package==""){
        alert("enter your tour package")
        return false;
    }
    else if(date==""){
        alert("enter your date")
        return false;
    }
    else if(nperson==""){
        alert("enter the no of person")
        return false;
    }
    else if(!nperson.match(pregex)){
        alert("enter valid no  of person ")
        return false
    }
    else if(!boarding && !fooding &&!sightseeing){
        alert("select what would you want to avail?")
        return false
    }
    else if(!iagree && !idisagree){
        alert("select your terms and conditions")
        return false
    }
    else{
        return true;
    }
}