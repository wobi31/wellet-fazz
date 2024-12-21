const alertspan = document.querySelector("span");
const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const getInput = document.querySelectorAll("input").value;
    // const formdata = new FormData(form);
    let result = "";
    let inputEmpaty = false;
    let inputNumber = false;
    // console.log(getInput);
    getInput.forEach((e) => {
      result += e.value;
      if (e.value.trim() === "") {
        inputEmpaty = true;
      } else if (isNaN(e.value)) {
        inputNumber = true;
      }
    });
    // const dataPin = localStorage.getItem("pin");
    localStorage.setItem("pin", result);
    if (inputEmpaty) {
      alertspan.style.visibility = "visible";
      alert.innerText = 'Do not Empaty';
    } else if (inputNumber) {
      alertspan.style.visibility = "visible";
      alertspan.innerText = "Must be a number";
      return false;
    } else {
      // localStorage.setItem('pin', result)
      location.href = "Dasbordv2.html";
    }
    console.log("ini pin", pin)
    // const pinuser = {
      // 
    // }
  });
});

// function strogeData() {
  // const data = localStorage.getItem(form).stringify();
  // document.getElementById("dataTersimpan").innerText = data
    // ? data
    // : "Tidak ada data.";
// }

// const form = document.querySelector("form");
// const errMsg = document.querySelector("span");
// 
// document.addEventListener("submit", function (event) {
  // event.preventDefault();
  // const pin1 = document.querySelector("#pin1").value;
  // const pin2 = document.querySelector("#pin2").value;
  // const pin3 = document.querySelector("#pin3").value;
  // const pin4 = document.querySelector("#pin4").value;
  // const pin5 = document.querySelector("#pin5").value;
  // const pin6 = document.querySelector("#pin6").value;
  // if (pin1 == "" || pin1 == null) {
    // errMsg.style.visibility = "visible";
    // console.log("masuk");
    // return false;
  // }
  // if (pin1 == "" || pin1 == null) {
    // errMsg.style.visibility = "visible";
    // console.log("masuk");
    // return false;
  // }
  // if (pin2 == "" || pin2 == null) {
    // errMsg.style.visibility = "visible";
    // console.log("masuk");
    // return false;
  // }
  // if (pin3 == "" || pin3 == null) {
    // errMsg.style.visibility = "visible";
    // console.log("masuk");
    // return false;
  // }
  // if (pin4 == "" || pin4 == null) {
    // errMsg.style.visibility = "visible";
    // console.log("masuk");
    // return false;
  // }
  // if (pin5 == "" || pin5 == null) {
    // errMsg.style.visibility = "visible";
    // console.log("masuk");
    // return false;
  // }
  // if (pin6 == "" || pin6 == null) {
    // errMsg.style.visibility = "visible";
    // console.log("masuk");
    // return false;
  // }
// 
  // if (pin1.values !== "number") {
    // errMsg.style.visibility = "visible";
    // errMsg.innerText = "Must be a number";
    // console.log(input);
    // return false;
  // }
// 
  // if (pin2.values !== "number") {
    // errMsg.style.visibility = "visible";
    // errMsg.innerText = "Must be a number";
    // console.log(input);
    // return false;
  // }
  // if (pin3.values !== "number") {
    // errMsg.style.visibility = "visible";
    // errMsg.innerText = "Must be a number";
    // console.log(input);
    // return false;
  // }
  // if (pin4.values !== "number") {
    // errMsg.style.visibility = "visible";
    // errMsg.innerText = "Must be a number";
    // console.log(input);
    // return false;
  // }
  // if (pin5.values !== "number") {
    // errMsg.style.visibility = "visible";
    // errMsg.innerText = "Must be a number";
    // console.log(input);
    // return false;
  // }
  // if (pin6.values !== "number") {
    // errMsg.style.visibility = "visible";
    // errMsg.innerText = "Must be a number";
    // console.log(input);
    // return false;
  // }
// 
  // if (pin1) {
    // localStorage.setItem("pin", result);
    // location.href = "Dasbordv2.html";
  // }
  // const pinUser = {
    // pin1: pin1,
    // pin2: pin2,
    // pin3: pin3,
    // pin4: pin4,
    // pin5: pin5,
    // pin6: pin6,
  // };
  // localStorage.setItem("pinUser", JSON.stringify(pinUser));
  // console.log("ini local", pinUser);
  // console.log("ini pin", input)
  // console.log("ini localcsvsdvd user", userData);
// });