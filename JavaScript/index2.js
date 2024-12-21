const form = document.querySelector("#form");
// const form = document.getElementById("form");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const localData = JSON.parse(localStorage.getItem("dataUser"));
const errMsg = document.querySelector("#alert2>div");
const err = document.querySelector("#h1");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (email.value !== localData.email) {
    errMsg.style.visibility = "visible";
    errMsg.innerHTML = 'Chek Your Email';
    errMsg.style.fontWeight = '500';
    return false;
  }
  if (pass.value !== localData.pass1) {
    errMsg.style.visibility = "visible";
    errMsg.innerHTML = 'Chek Your password';
    errMsg.style.fontWeight = '500';
    return false;
  } else {
    console.log("masuk");
    errMsg.style.visibility = "visible";
  }
  if (email.value === localData.email && pass.value === localData.pass1) {
    location.href = "Landingpage2.html";
    return false;
  } 
});
// });
//
// function validationPass(pass) {
// const regexPass =
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]).{8,}$/;
// (?=.*[a-z]) : Memastikan ada setidaknya satu huruf kecil.
// (?=.*[A-Z]) : Memastikan ada setidaknya satu huruf besar.
// (?=.*\d) : Memastikan ada setidaknya satu digit (angka).
// (?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?~-])` : Memastikan   adasetidaknya satu karakter khusus.
// .{8,} : Memastikan panjang password minimal 8 karakter.
// $ : Menandakan akhir dari string.
// return regexPass.test(pass);
// }
function change() {
  if (pass.type === "password") {
    pass.type = "text";
    return;
  }
  pass.type = "password";
}
