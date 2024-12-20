const alertspan = document.querySelector("span");
const form = document.querySelector("form");
const getInput = document.querySelectorAll("input");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
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
    const dataPin = localStorage.getItem("pin");
    localStorage.setItem("pin", result);
    if (inputEmpaty) {
      alertspan.style.visibility = "visible";
      alert.innerText = 'Do not Empaty';
    } else if (inputNumber) {
      alertspan.style.visibility = "visible";
      alertspan.innerText = "Must be a number";
      return false;
    } else {
      localStorage.setItem('pin', result)
      location.href = "Dasbordv2.html";
    }
  });
});

function strogeData() {
  const data = localStorage.getItem(form).stringify();
  document.getElementById("dataTersimpan").innerText = data
    ? data
    : "Tidak ada data.";
}
