const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const regiestBtn = document.querySelector("#regiestBtn");
const successMs = document.querySelector("#successMs")
const errorMs = document.querySelector("#errorMs")
const form = document.querySelector("form")
const mssName = document.querySelector("#mssName")
let userArray = [] ; 
if(localStorage.getItem("users") !==null ){
    userArray = JSON.parse(localStorage.getItem("users"))
}





const valudInput = (input)=>{
    const regex = {
        userName:/^[A-Z][a-z]{2,9}$/mg,
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
const userRegiest = () =>{
   if(valudInput(userName) && valudInput(userEmail) &&valudInput(userPassword)){
    errorMs.classList.replace("d-block" , "d-none")
    const matchEmail = userArray.find((user) => user.email === userEmail.value);
    if(matchEmail){
        errorMs.classList.replace("d-none" , "d-block")
        return;
    }
    let user = {
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value,
    }
    userArray.push(user)
    localStorage.setItem("users" ,JSON.stringify(userArray) )
    successMs.classList.replace("d-none" , "d-block")
    setTimeout(() =>{
        window.location.href = 'index.html'
    

    },2000)
   }
   
    
}
regiestBtn.addEventListener("click" , userRegiest)
form.addEventListener("submit", (e)=>{
    e.preventDefault()
})
userName.addEventListener('input' , ()=>{
    valudInput(userName)
})
userEmail.addEventListener('input' , ()=>{
    valudInput(userEmail)
})
userPassword.addEventListener('input' , ()=>{
    valudInput(userPassword)
})

