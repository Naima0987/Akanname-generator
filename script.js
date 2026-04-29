const form = document.getElementById("form");
const output = document.getElementById("output");
const error = document.getElementById("error");
const resetBtn = document.getElementById("resetBtn");


const male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const female = ["Akosua", "Adowa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

form.addEventListener("submit", function (e) {
    e.preventDefault();



    const dateValue = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    error.textContent = "...";
    if (!dateValue) {
        error.textContent = "⚠️ Please select your birth date";
        return;

    } if (!gender) {
        error.textContent = "⚠️ Please select your gender";
        return;
    }
    const date = new Date(dateValue);
    
    if (isNaN(date.getTime())) {
        alert("Invalid date")
        ; return;
    } const DD = date.getDate();
    const MM = date.getMonth() + 1;
    const year = date.getFullYear();
    if (year < 1900 || year > new Date().getFullYear())
    {
        alert("Invalid year selected");
        return;
    }
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const rawIndex = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
    const dayIndex = (Math.floor(rawIndex) + 7) % 7;
    const month = date.getMonth() + 1; if (MM < 1 || MM > 12)
    {
        alert("Invalid month selected");
        return;
    } if (DD < 1 || DD > 31) {
        alert("Invalid day selected");
        return;
    }
    const days =
        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    
    
    let akanName = gender.value === "male" ? male[dayIndex]
       
        : female[dayIndex];
    output.textContent = `🎉 You were born on a ${days[dayIndex]}. Your Akan name is ${akanName}`;
});
resetBtn.addEventListener("click",
    function () { form.reset(); output.textContent = ""; error.textContent = ""; });