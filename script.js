let input = document.getElementById("input");
let result = document.getElementById("result");
let calculateAge = document.getElementById("calculateAge");

function calculate(){
let birthdayValue = input.value;
if(birthdayValue === ""){
  alert("Please enter your birthday date!");
}else{
  let age = getAge(birthdayValue);
  result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
}
}

function getAge(birthdayValue){
  let currentDate = new Date();
  let birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if(month < 0 ||
  (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ){
    age--;
  }
  return age;
}

calculateAge.addEventListener("click", calculate);

