const logOut = document.querySelector("#logOut")
const welcomeName = document.querySelector("#welcomeName")
if(localStorage.getItem("userName")){
    const userName = localStorage.getItem("userName")
    console.log(userName)
    welcomeName.innerHTML = `welcome ${userName}`
}
else{
    welcomeName.innerHTML = `you are  gay`
    setTimeout(() => {
        
        window.location.href = 'index.html'
    }, 2000);
}
const logOutUser = () =>{
    localStorage.removeItem("userName")
     welcomeName.innerHTML = `you are  gay`
    setTimeout(() => {
       window.location.href = 'index.html'
    }, 2000);


}
logOut.addEventListener('click' , logOutUser)