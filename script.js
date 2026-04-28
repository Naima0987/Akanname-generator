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

  error.textContent = "";
  output.textContent = "";

  if (!dateValue) {
    error.textContent = "⚠️ Please select your birth date";
    return;
  }

  if (!gender) {
    error.textContent = "⚠️ Please select your gender";
    return;
  }
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) {
      alert("Invalid date");
      return;
    }
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month < 1 || month > 12) {
      alert("Invalid month selected");
      return;
    }

    if (day < 1 || day > 31) {
      alert("Invalid day selected");
      return;
    }

  const dayIndex = date.getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let akanName = gender.value === "male" ? male[dayIndex] : female[dayIndex];

  output.textContent = `🎉 You were born on a ${days[dayIndex]}. Your Akan name is ${akanName}`;
});


resetBtn.addEventListener("click", function () {
    
    form.reset();
    output.textContent = "";
    error.textContent = "";
});