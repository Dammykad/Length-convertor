function doConversion() {
    var chosenValue = document.getElementById("inches_cm_choice").value;
    var inputValue = document.getElementById("numInput").value;
    // alert(chosenValue);
    if (inputValue === "") {
        alert("Please enter a number");
    }
    if (chosenValue === 'Inches'){
        convertInchToCm(inputValue);
    } else{
        convertCmToInches(inputValue);
    }
}


function convertInchToCm(inputVal) {

    var result;
    if (inputVal != "") {
        result = inputVal * 2.5;
        document.getElementById("result").innerHTML = ["Your Answer in Centimeters is : " + result];
    }
}


function convertCmToInches(inputVal) {
    var result;
    if (inputVal != "") {
        result = inputVal / 2.5;
        document.getElementById("result").innerHTML = ["Your Answer in Centimeters is : " + result];
    }
}

