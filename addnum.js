function addnum() {
    // Get input values and convert them to numbers
    let firname = parseFloat(document.getElementById("fnum").value);
    let secname = parseFloat(document.getElementById("snum").value);

    // Check if inputs are valid numbers
    if (isNaN(firname) || isNaN(secname)) {
        document.getElementById("finalanswer").innerHTML = "Please enter valid numbers!";
        return;
    }

    // Perform addition
    let answer = firname + secname;

    // Display result
    document.getElementById("finalanswer").innerHTML = "Answer is " + answer;
}
