const form = document.querySelector("form");
const errMsg = document.querySelector("span");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = document.querySelectorAll("form input");
  let result = "";
  console.log("dengan ws", result);
  let inputEmpty = false;
  let inputNotNumber = false;
  inputs.forEach((input) => {
    result += input.value.trim();
    if (input.value.trim() === "") {
      inputEmpty = true;
    } else if (isNaN(input.value)) {
      inputNotNumber = true;
    }
  });

  console.log("ini panjang pin", result.length);
  console.log("ini pin", result);
  if (inputEmpty) {
    errMsg.style.visibility = "visible";
    errMsg.innerText = "Input cannot be empty";
    return;
  } else if (inputNotNumber) {
    errMsg.style.visibility = "visible";
    errMsg.innerText = "Input must be a number";
    return;
  } else {
    localStorage.setItem("userPin", result.trim());
    // alert("Data berhasil disimpan!");
    // location.href = "Dasbordv2.html";
  }
  console.log("ini dari local pin baru", localStorage);
});
