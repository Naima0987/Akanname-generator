const form = document.getElementById("form");
const output = document.getElementById("output");
const error = document.getElementById("error");
const resetBtn = document.getElementById("reset");

const male = ["Ryan", "Ray", "Robin", "Ronald", "Ricky"];
const Female = ["Naima", "Nami", "Nicole", "Nico", "Niche"];

form.addEventListerner("submit"), function (e) {
    e.preventDefault();
}
const dateValue = document.getElementById("date").value;
const gender = document.querySelector('input[name = "gender"]: checked');

