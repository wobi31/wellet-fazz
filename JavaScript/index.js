const form2 = document.getElementById("form2");
const errMsg = document.querySelector(".alert2>div");

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const pass2 = document.querySelector("#pass2").value;
  const pass1 = document.querySelector("#pass1").value;
  if (pass1 !== pass2) {
    errMsg.style.visibility = "visible";
    return false;
  }
  if (pass1 === pass2) {
    location.href = "EditPropil.html";
  }
  const dataUser = {
    email: email,
    pass1: pass1,
    pass2: pass2,
  };
  localStorage.setItem("dataUser", JSON.stringify(dataUser));
  console.log("ini local", dataUser);
  console.log("ini localcsvsdvd user", userData);
});
