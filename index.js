document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formdata = new FormData(form);
    const getEmail = formdata.get("email");
    const getPass = formdata.get("password");
    const getData = localStorage.getItem('userData.email')
    const getpass = localStorage.getItem('userData.pass')
    console.log(getEmail);
    console.log(getPass);
    if (getEmail === 'admin@mail' && getPass === '123') {
      location.href = "Landingpage2.html";
      return;
    } else {
      const call = document.querySelector("#alert2>div");
      call.style.visibility = "visible";
    }
    const json = JSON.stringify(formdata).toString();
    console.log(json);
  });
});

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
    const formdata2 = new FormData(form2);
    const email = formdata2.get("email");
    const pass1 = formdata2.get("password1");
    const pass2 = formdata2.get("password2");
    const alertSucces = document.querySelector(".alert1");
    const alertfailed = document.querySelector(".alert2");
    console.log(email);
    console.log(pass1);
    console.log(pass2);
    if (validationPass(pass1)) {
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

    alert("Data berhasil disimpan ke localStorage!");
  }, 1000);
});
