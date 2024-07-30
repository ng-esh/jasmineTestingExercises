window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 10000, years: 10, rate: 5 };
  const amountValue = document.getElementById("loan-amount");
  amountValue.value = values.amount;
  const yearValue = document.getElementById("loan-years");
  yearValue.value = values.years;
  const rateValue = document.getElementById("loan-rate");
  rateValue.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    const currentValues = getCurrentUIValues();
    const monthlyPayment = calculateMonthlyPayment(currentValues);
    updateMonthly(monthlyPayment);
  }


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const P = values.amount;
    const i = (values.rate / 100) / 12;
    const n = Math.floor(values.years * 12);
    const monthlyPayment = (P * i) / (1 - Math.pow((1 + i), -n));
    return monthlyPayment.toFixed(2);
  }
  
// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUpdate = document.getElementById("monthly-payment");
  monthlyUpdate.innerText = `$${monthly}`;
}
