var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var btnIsTriangle = document.querySelector("#btn-is-triangle");
var outputIsTriangle = document.querySelector("#is-triangle-output");

btnIsTriangle.addEventListener("click",isTriangle);

function validateNumber(str) {
    return !isNaN(str) && str.trim().length > 0;
}

function isTriangle(){
    outputIsTriangle.style.display = "inline-block";
    var angle1Value = angle1.value;
    var angle2Value = angle2.value;
    var angle3Value = angle3.value;
    if(validateNumber(angle1Value) && validateNumber(angle2Value) && validateNumber(angle3Value))
    {
        if(Number(angle1Value)>0 && Number(angle2Value)>0 && Number(angle3Value)>0)
        {
            if (Number(angle1Value) + Number(angle2Value) + Number(angle3Value) === 180) {
                outputIsTriangle.style.color = "green";
                outputIsTriangle.innerText = "Yayy!! They make a triangle";
              } else {
                outputIsTriangle.style.color = "red";
                outputIsTriangle.innerText = "Oops!! the angles don't make a triangle";
              }
        }
        else
        {
            outputIsTriangle.innerHTML="ANGLE VALUES MUST NOT CONTAIN NEGATIVE VALUES"
        }
    }
    else
    {
        outputIsTriangle.innerText = "INVALID INPUT";
    }
}
