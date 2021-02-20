document.getElementById("calculate").addEventListener('click', Calculate);
const history = document.getElementById("results"), checkBox = document.getElementById("doround"), dec = document.getElementById("decimals"), op = document.getElementById("operator"), x1 = document.getElementById("firstnumber"), x2 = document.getElementById("secondnumber");
let result;

function Calculate() {
    if(op.value == "add")
        result = parseFloat(x1.value) + parseFloat(x2.value);
    else if(op.value == "sub")
        result = parseFloat(x1.value) - parseFloat(x2.value);
    else if(op.value == "mul")
        result = parseFloat(x1.value) * parseFloat(x2.value);
    else
        result = parseFloat(x1.value) / parseFloat(x2.value);
    console.log(checkBox.value);
    if(checkBox.value == "on") {
        result = Math.round(result.toFixed(dec.value));
        x1.value = result;
    }
}