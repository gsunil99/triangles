var base = document.querySelector("#base");
var height = document.querySelector("#height");
var btn = document.querySelector("#btn-area");
var output = document.querySelector("#area-output");

btn.addEventListener("click", handleArea)

function validateNumber(str) {
    return !isNaN(str) && str.trim().length > 0;
  }

  function nonZero(number) {
    return Number(number) > 0;
}

function handleArea() {
    if(validateNumber(base.value) && validateNumber(height.value) && nonZero(base.value) && nonZero(height.value)) {
        output.style.color = "green";
        output.innerText = "Area is " + 0.5*(Number(base.value) + Number(height.value))+" cm";
    } else {
        output.style.color = "red";
        output.innerText = "INVALID";
    }
}