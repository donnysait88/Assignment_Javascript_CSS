/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDayyy = 35;
var totalCost = 0;
var costWeek = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var ul = document.getElementById("page");
var daySelector = ul.getElementsByTagName("li");

for (var div of daySelector) {
    div.addEventListener("click", changeDay);
  }

function changeDay() {
  if (this.classList.contains("clicked")) {
      this.classList.remove("clicked");
    } else {
      this.classList.add("clicked");
  }
calculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.getElementById("clear-button");

function clearDays() {
    var items = document.querySelectorAll("li");
    items.forEach(function(item) {
        item.classList.remove("clicked");
    });
  costWeek.innerHTML = 0;
}

clearButton.addEventListener("click", clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var listItems = document.getElementsByClassName("small-button blue-hover");

for (var item of listItems) {
  item.addEventListener("click", changeRate);
  }

function changeRate() {
  if (listItems[0].classList.contains('clicked')) {
      listItems[0].classList.remove("clicked");
      listItems[1].classList.add("clicked");
      costPerDay = 20;
  } else {
    listItems[1].classList.add("clicked");
    if(listItems[1].classList.contains("clicked")) {
      listItems[1].classList.remove("clicked");
    listItems[0].classList.add("clicked");
    costPerDay = 35;
  }}
calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
  let dayCounter = document.querySelectorAll(".clicked").length-1;
  totalCost = costPerDay * dayCounter;
  costWeek.innerHTML = totalCost;
}