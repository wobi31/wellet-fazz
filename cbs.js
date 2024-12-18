document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formRegister");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email")
    const password1 = document.getElementById("password1")
    const password2 = document.getElementById("password2")
    // const formdata = new FormData(form);
    // const getEmail = formdata.get("email");
    // const getPass1 = formdata.get("password1");
    // const getPass2 = formdata.get("password2");
    console.log(email);
    console.log(password1);
    console.log(password2);
    // if (getEmail === "admin@mail.com" && getPass === "1234") {
      // window.location.href = "Landingpage2.html";
    // } else {
      // const call = document.querySelector("#alert2>div");
      // call.style.visibility = "visible";
    // }
    // const json = JSON.stringify(formdata).toString();
    // console.log(json);
  });
});



