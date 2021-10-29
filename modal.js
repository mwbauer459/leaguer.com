var modal = document.getElementById("modal-wrapper");
var login = document.getElementById("login");
var signup = document.getElementById("signup");
var closer = document.getElementById("close-modal");

function showModal(){ 
    modal.style.display = "block";
} 

function closeModal(){
    modal.style.display = "none";
}

function windowClose(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

login.addEventListener("click", showModal, false);
signup.addEventListener("click", showModal, false);
closer.addEventListener("click", closeModal, false);
window.addEventListener("click", windowClose, false);