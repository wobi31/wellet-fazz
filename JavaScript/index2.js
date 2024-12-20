const form = document.getElementById("form");
const alert = document.querySelector("#alert2>div");
const pass3 = document.getElementById("password");


document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formdata = new FormData(form);
    const getEmail = formdata.get("email");
    const getPass = formdata.get("password");
    if (getEmail === "admin@mail" && getPass === "123") {
      location.href = "Landingpage2.html";
      return;
    } else {
      console.log("masuk")
      alert.style.visibility = "visible";
    }
  });
});
//
function validationPass(pass) {
  const regexPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]).{8,}$/;
  // (?=.*[a-z]) : Memastikan ada setidaknya satu huruf kecil.
  // (?=.*[A-Z]) : Memastikan ada setidaknya satu huruf besar.
  // (?=.*\d) : Memastikan ada setidaknya satu digit (angka).
  // (?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?~-])` : Memastikan   adasetidaknya satu karakter khusus.
  // .{8,} : Memastikan panjang password minimal 8 karakter.
  // $ : Menandakan akhir dari string.
  return regexPass.test(pass);
}
function change() {
  if (pass3.type === "password") {
    pass3.type = "text";
    return;
  }
  pass3.type = "password";
}