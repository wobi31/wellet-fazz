const Alertspan = document.querySelector("span");
// const getPin = document.querySelector("pin").value
const form = document.querySelector("form");
const getInput = document.querySelectorAll("input");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formdata = new FormData(form);
    const getEmail = formdata.get("email");
    const getInput = document.querySelectorAll("input");
    let result = "";
    // console.log(getInput);
    getInput.forEach((e) => {
      result += e.value;
    });
    const dataPin = localStorage.getItem("pin");
    localStorage.setItem("pin", result);
    // console.log(result);
    // if (getEmail === "admin@mail") {
    // location.href = "enterpin1.html";
    // } else {
    // getEmail.style.border = "red";
    // Alertspan.style.visibility = "visible";
    // }

    if (getInput.values == "" || getInput.values == null) {
      Alertspan.style.visibility = "visible";
    } else {
      alert("masuk2");
      location.href = "Dasbordv2.html";
    }
    if (getInput === "number") {
      alert("harus number");
    }
    console.log('Nilai getInput:', getInput);
    console.log(result);
  });
});

function strogeData() {
  const data = localStorage.getItem(form).stringify();
  document.getElementById("dataTersimpan").innerText = data
    ? data
    : "Tidak ada data.";
}

// const form = document.querySelector("#formpin")
