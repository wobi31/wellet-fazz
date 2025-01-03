const form = document.querySelector("#form");
const passData = JSON.parse(localStorage.getItem("dataUser"));
const passOld = document.querySelector("#pass1");
const passNew1 = document.querySelector("#passNew1");
const passNew2 = document.querySelector("#passNew2");
const errMsg1 = document.querySelector("#err1");
const errMsg2 = document.querySelector("#err2");
const errMsg3 = document.querySelector("#err3");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(passOld.value);
  console.log(passNew1.value);
  console.log(passNew2.value);
  if (passOld.value == "") {
    errMsg1.textContent = "Input do not Empety!";
    errMsg1.style.color = "red";
    errMsg1.style.fontWeight = "500";
    return false;
  }
  if (passNew1.value == "") {
    errMsg2.textContent = "Input do not Empety!";
    errMsg2.style.color = "red";
    errMsg2.style.fontWeight = "500";
    return false;
  }
  if (passNew2.value == "") {
    errMsg3.textContent = "Input do not Empety!";
    errMsg3.style.color = "red";
    errMsg3.style.fontWeight = "500";
    return false;
  }
  if (passOld.value !== passData.pass1) {
    errMsg1.textContent = "PassWord Corect!";
    errMsg1.style.color = "red";
    errMsg1.style.fontWeight = "500";
  }
  if (passNew1.value !== passNew2.value) {
    errMsg2.textContent = "Password Not Same!";
    errMsg2.style.color = "red";
    errMsg2.style.fontWeight = "500";
    return false;
  }
  if (passOld.value === passData.pass1) {
    alert("sukes");
    // localStorage.removeItem(dataUser.pass1.pass2)
  }
  updatePassword(passNew1.value, passNew2.value)
});
//fucntion new pass
function updatePassword(newPass1, newPass2) {
  const dataUser = localStorage.getItem("dataUser");
  if (dataUser) {
    const userData = JSON.parse(dataUser);

    userData.pass1 = newPass1;
    userData.pass2 = newPass2;

    localStorage.setItem("dataUser", JSON.stringify(userData));
  } else {
    console.log("Not found localStorage");
  }
}

// updatePassword("passwordBaru1", "passwordBaru2");

function changeI() {
  if (passOld.type === "password") {
    passOld.type = "text";
    return;
  }
  passOld.type = "password";
}

function changeII() {
  if (passNew1.type === "password") {
    passNew1.type = "text";
    return;
  }
  passNew1.type = "password";
}

function changeIII() {
  if (passNew2.type === "password") {
    passNew2.type = "text";
    return;
  }
  passNew2.type = "password";
}

// change()
