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

const form2 = document.getElementById("form2");
form2.addEventListener("submit", function (e) {
  e.preventDefault();
  setTimeout(function () {
    const formdata = new FormData(form2);
    const email = formdata.get("email");
    const pass1 = formdata.get("password1");
    const pass2 = formdata.get("password2");
    const alertSucces = document.querySelector(".alert1");
    const alertfailed = document.querySelector(".alert2");
    console.log(email);
    console.log(pass1);
    console.log(pass2);
    if (validationPass(pass1) && validationPass(pass2)) {
      alertfailed.style.visibility = "visible";
    }
    if (pass1 !== pass2) {
      alertfailed.style.visibility = "visible";
    }
    if (pass1 === pass2) {
      window.location.href = "EditPropil.html";
    }
    const userData = {
      email: email,
      pass1: pass1,
      pass2: pass2,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  }, 1000);
});
