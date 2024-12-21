const errMsg = document.querySelector("#err-messege");
const errMsg2 = document.querySelector("#err-messege2");
const form = document.querySelector("form");
const getInput = document.querySelector("#input");
const textArea = document.querySelector("#textArea");
const popUpPin = document.querySelector(".pin");
const popUpSucces = document.querySelector(".succes");
const popUpfailed = document.querySelector(".failed");
const bgBlack = document.querySelector("main");
// const formData = new formData(form)
document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log('form data this', formData)
    if (getInput.value == "" || getInput.value == null) {
      errMsg.style.display = "unset";
      errMsg.innerHTML = "Input do not Empaty!";
      console.log("masuk text");
      return false;
    } else {
      bgBlack.style.background = "#00000099";
      popUpPin.style.visibility = "visible";
      getInput.style.background = "gray";
      textArea.style.background = "gray";
    }
    console.log(strogeData())
  });
});

function strogeData() {
  const data = localStorage.getItem(form).stringify();
  document.getElementById("dataTersimpan").innerText = data
    ? data
    : "Tidak ada data.";
    console.log(data)
}
