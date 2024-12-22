const form = document.querySelector("#form");
const passData = JSON.parse(localStorage.getItem("dataUser"));
const passOld = document.querySelector("#pass1");
const passNew1 = document.querySelector("#passNew1");
const passNew2 = document.querySelector("#passNew2");
const errMsg = document.querySelector("span");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(passData);
  console.log(passOld.value);
  console.log(passNew1.value);
  console.log(passNew2.value);
  if (passOld == "" && passNew1 == "" && passNew2) {
    errMsg.textContent = "Input do not Empety";
    errMsg.style.color = "red";
    errMsg.style.fontWeight = "500";
  }
});
