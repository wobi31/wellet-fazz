const Alertspan = document.querySelector("span");
const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formdata = new FormData(form);
    const getEmail = formdata.get("email");
    console.log(getEmail);
    if (getEmail === "admin@mail") {
      alert("masuk2");
      location.href = "Dasbordv2.html";
    }
    if (getEmail.values == "" || getEmail.values == null) {
      Alertspan.style.visibility = "visible";
    }
  });
});

function strogeData() {
  const data = localStorage.getItem(form).stringify();
  document.getElementById("dataTersimpan").innerText = data
    ? data
    : "Tidak ada data.";
}
