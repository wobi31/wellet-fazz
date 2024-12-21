const errMsg = document.querySelector("span");
const form = document.querySelector("form");
const email = document.querySelector("#email")
const localData = JSON.parse(localStorage.getItem("dataUser"));


document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (email.value === localData.email) {
      location.href = "Dasbordv2.html";
    }else{
      errMsg.style.visibility = "visible";
      errMsg.innerHTML = "Chek Your Email";
      errMsg.style.background = "red";
      errMsg.style.color = "white";
      errMsg.style.fontWeight = "500";
    }
    if (email.value == "" || email.value == null) {
      errMsg.style.visibility = "visible";
      errMsg.innerHTML = "Email do not empaty";
    }
  });
});

// function strogeData() {
  // const data = localStorage.getItem(form).stringify();
  // document.getElementById("dataTersimpan").innerText = data
    // ? data
    // : "Tidak ada data.";
// }
// 