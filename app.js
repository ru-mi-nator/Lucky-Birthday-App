const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");

checkButton.addEventListener('click',function checkBirthdayIsLucky)

function checkBirthdayIsLucky() {
    const date = dateOfBirth.value;
    const luckyNumber = luckyNumber.value;
    const sum = calculateSum(date);
}