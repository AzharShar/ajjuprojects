var dob = document.getElementById("dob");
var calbtn = document.getElementById("calculate-btn");
var result = document.getElementById("result");

calbtn.addEventListener("click", function() {
    const dateOfBirth = new Date(dob.value);
    const age = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(age);
    const actualAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    result.innerHTML = `Your age is ${actualAge} years.`;
});