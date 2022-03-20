const bill = document.getElementById("bill");
const people = document.getElementById("people");
const btn = document.getElementById("reset");
const tipPrice = document.getElementById("tip_price");
const totalPrice = document.getElementById("total_price");

tipPrice.innerHTML = `${(0).toFixed(2)}$`;
totalPrice.innerHTML = `${(0).toFixed(2)}$`;

let billPrice = "";
let tipPercentage = "";
let peopleNum = "";
let tipResult = 0;
let totalResult = 0;

(function generateTips() {
  const tips = document.getElementById("tips");

  for (let tip of [5, 10, 15, 25, 50]) {
    let tipButton = document.createElement("input");
    tipButton.type = "button";
    tipButton.value = `${tip}%`;
    tipButton.className = "flex_button flex_button_hover";
    tips.appendChild(tipButton);

    tipButton.addEventListener("click", () => {
      tipPercentage = tip;
      for (let i of document.querySelectorAll(".flex_button_choose")) {
        i.classList.remove("flex_button_choose");
        i.classList.add("flex_button_hover");
      }
      tipButton.classList.add("flex_button_choose");
      tipButton.classList.remove("flex_button_hover");
      calculate();
    });

  }
  let tipInput = document.createElement("input");
  tipInput.type = "text";
  tipInput.placeholder = "Custom";
  tipInput.id = "tip_input";
  tipInput.className = "flex_button custom_button input_box";
  tips.appendChild(tipInput);

  tipInput.addEventListener("input", () => {
    tipPercentage = Number(tipInput.value);
    for (let i of document.querySelectorAll(".flex_button_choose")) {
      i.classList.remove("flex_button_choose");
      i.classList.add("flex_button_hover");
    }
    calculate();
  });
})();

bill.addEventListener("input", () => {
  billPrice = Number(bill.value);
  calculate();
});

people.addEventListener("input", () => {
  peopleNum = Number(people.value);
  if (people.value === "0") {
    document.getElementById("error").style.display = "block";
    people.classList.add("outline_red");
  } else {
    document.getElementById("error").style.display = "none";
    people.classList.remove("outline_red");
    calculate();
  }
});

function calculate() {
  if (billPrice !== "" && tipPercentage !== "" && peopleNum != "") {
    tipResult = billPrice * tipPercentage / 100 / peopleNum;
    totalResult = billPrice / peopleNum;
    tipPrice.innerHTML = `${tipResult.toFixed(2)}$`;
    totalPrice.innerHTML = `${totalResult.toFixed(2)}$`;
  }
}

btn.addEventListener("click", () => {
  billPrice = "";
  tipPercentage = "";
  peopleNum = "";
  bill.value = "";
  people.value = "";
  document.getElementById("tip_input").value  = "";
  tipPrice.innerHTML = `${(0).toFixed(2)}$`;
  totalPrice.innerHTML = `${(0).toFixed(2)}$`;
  for (let i of document.querySelectorAll(".flex_button_choose")) {
    i.classList.remove("flex_button_choose");
    i.classList.add("flex_button_hover");
  }
});
