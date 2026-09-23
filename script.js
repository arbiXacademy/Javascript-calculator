class Calculator {
  constructor(displayElement) {
    this.display = displayElement;
    this.currentInput = "";

    this.updateDisplay();
  }

  appendValue(value) {
    if (this.currentInput === "0" && value === "0") {
        return;
    }

    if (this.currentInput.includes(".") && value === "."){
        return;
    }

    if (this.currentInput === "0" && value !== ".") {
        this.currentInput = value;
    } else {
        this.currentInput += value;
    }

    this.updateDisplay();
  }

  clear() {
    this.currentInput = "";
    this.updateDisplay();
  }

  backspace() {
    this.currentInput = this.currentInput.slice(0, -1);
    this.updateDisplay();
  }

  calculate() {
    this.currentInput = eval(this.currentInput).toString();
    this.updateDisplay();
  }

  updateDisplay() {
    this.display.value = this.currentInput || "0";
  }
}

let display = document.getElementById("display");
let buttons = document.querySelector(".buttons");
let calculator = new Calculator(display);

buttons.addEventListener("click", (event) => {
  let button = event.target;

  if (button.dataset.value !== undefined) {
    calculator.appendValue(button.dataset.value);
  }

  if (button.dataset.action === "clear") {
    calculator.clear();
  }

  if (button.dataset.action === "backspace") {
    calculator.backspace();
  }

  if (button.dataset.action === "equals") {
    calculator.calculate();
  }
});