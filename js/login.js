
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const loginBtn = document.querySelector("#loginBtn");
const successMs = document.querySelector("#successMs")
const errorMs = document.querySelector("#errorMs")
const form = document.querySelector("form")
let userArray = [] ; 
if(localStorage.getItem("users") !==null ){
    userArray = JSON.parse(localStorage.getItem("users"))
}


const valudInput = (input)=>{
    const regex = {
        userEmail:/^[A-Za-z-0-9-_]{3,}@(gmail|yahoo|msn|hotmail)\.(com|org)$/mg,
        userPassword:/^[A-Z][a-z0-9]{2,}[!@#$]$/mg
    }
    if(regex[input.id].test(input.value)){
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
const loginUser = () =>{
    if(valudInput(userEmail) && valudInput(userPassword)){
        errorMs.classList.replace("d-block" , "d-none")
    for(let i =0 ; i <userArray.length ; i++){
        if(userArray[i].email == userEmail.value && userArray[i].password ==userPassword.value){
            successMs.classList.replace("d-none" , "d-block")
            localStorage.setItem("userName" , userArray[i].name)
            console.log("hello")
            setTimeout(() => {
                window.location.href = "home.html"
            }, 2000);
            return;
        }
    }
    errorMs.classList.replace("d-none" , "d-block")
    }
}
loginBtn.addEventListener("click" , loginUser)
form.addEventListener("submit", (e)=>{
    e.preventDefault()
})

userEmail.addEventListener('input' , ()=>{
    valudInput(userEmail)
})
userPassword.addEventListener('input' , ()=>{
    valudInput(userPassword)
})