const form = document.querySelector("form");
const form2 = document.querySelector("#form2");
const errMsg = document.querySelector("#err-messege");
const errMsg2 = document.querySelector("#err-messege2");
const getInput = document.querySelector("#input");
const textArea = document.querySelector("#textArea");
const popUpPin = document.querySelector(".pin");
const popUpSucces = document.querySelector(".succes");
const popUpfailed = document.querySelector(".failed");
const bgBlack = document.querySelector("main");
const getPin = localStorage.getItem("userPin");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (getInput.value == "" || getInput.value == null) {
    errMsg.style.display = "unset";
    errMsg.innerHTML = "Input do not Empaty!";
    return false;
  } else {
    bgBlack.style.background = "#00000099";
    popUpPin.style.visibility = "visible";
    getInput.style.background = "gray";
    textArea.style.background = "gray";
  }
  console.log(inputPin);
  console.log(strogeData());
});

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPin = document.querySelectorAll(".formPin input");
  let pinResult = "";
  let inputEmpty = false;
  let inputNotNumber = false;

  inputPin.forEach((input) => {
    pinResult += input.value;
    if (input.value.trim() === "") {
      inputEmpty = true;
    } else if (isNaN(input.value)) {
      inputNotNumber = true;
    }
  });
  if (inputEmpty) {
    errMsg2.style.visibility = "visible";
    errMsg2.innerText = "Input cannot be empty";
    return;
  }
  if (inputNotNumber) {
    errMsg2.style.visibility = "visible";
    errMsg2.innerText = "Input must be a number";
    return;
  }
  if (pinResult === "") {
    errMsg2.style.visibility = "visible";
    errMsg2.innerHTML = "Input tidak boleh kosong!";
    return false;
  }
  if (pinResult !== getPin) {
    errMsg2.style.visibility = "visible";
    errMsg2.innerHTML = "Pin Coreet?";
    return false;
  }
  if (pinResult === getPin) {
    popUpSucces.style.visibility = "visible";
    popUpPin.style.visibility = "hidden";
  } else {
    popUpfailed.style.visibility = "visible";
    errMsg2.style.visibility = "visible";
    errMsg2.innerHTML = "Pin Coreet?";
  }
});

function btnDone() {
  popUpSucces.style.visibility = "hidden";
  bgBlack.style.background = "none";
  getInput.style.background = "none";
  textArea.style.background = "none";
  errMsg2.style.visibility = "visible";
}
function risetPin(){
  location.href = "enterpin1.html";
  alert("masuk")
}