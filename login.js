
  //showing password
  showLoginPassword=document.getElementById("toggle-password");
  showLoginPassword.addEventListener("click",()=>{
    showLoginPassword.classList.toggle("fa-eye-slash");
    showLoginPassword.classList.toggle("fa-eye");
    loginPassword=document.getElementById("login-password");
      if (loginPassword.type == "password") {
        loginPassword.type = "text";
      } else {
        loginPassword.type = "password";
      }
  });
  //login with third party warn--->
  const logins=document.getElementsByClassName("login-with");
  Array.from(logins).forEach(login => {
    login.addEventListener("click",()=>{
      alert("This service will be added soon!! Try another way for now------>");
    });
  });