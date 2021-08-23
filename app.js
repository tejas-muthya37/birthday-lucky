const dob = document.querySelector("#date-input");
const luckyNo = document.querySelector("#luckyNo-input");
const checkBtn = document.querySelector(".btn-check");
const outputDiv = document.querySelector(".output-div");

checkBtn.addEventListener("click", function () {
  checkLuck();
});

function calculateSum(date) {
  var sum = 0;
  date = date.replaceAll("-", "");
  for (var i = 0; i < date.length; i++) {
    sum = sum + Number(date.charAt(i));
  }
  return sum;
}

function checkLuck() {
  outputDiv.classList.add("output-display-div");
  const date = dob.value;
  const returnedSum = calculateSum(date);
  if (returnedSum % Number(luckyNo.value) === 0) {
    outputDiv.innerText = "Your birthday is lucky! 🥳";
  } else {
    outputDiv.innerText = "Your birthday is not lucky! 😕";
  }
}
