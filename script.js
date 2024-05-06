// This function adds two numbers
function add(x, y) {
  return;
}

// This function subtracts two numbers
function subtract(x, y) {
  return;
}

// This function multiplies two numbers
function multiply(x, y) {
  return x * y;
}

// This function divides two numbers
function divide(x, y) {
  return x / y;
}

console.log("Select any operation.");
console.log("1.Add");
console.log("2.Subtract");
console.log("3.Multiply");
console.log("4.Divide");

while (true) {
  // take input from the user
  let choice = prompt("Enter choice(1/2/3/4):");
  // check if choice is one of the four options
  if (choice === '1' || choice === '2' || choice === '3' || choice === '4') {
    try {
      let num1 = parseFloat(prompt("Enter first number:"));
      let num2 = parseFloat(prompt("Enter second number:"));
    } catch (e) {
      console.log("Invalid input, please enter a number.");
      continue;
    }
    if (choice === '1') {
      console.log("I don't know how to add.");
    } else if (choice === '2') {
      console.log("I've never been to school, actually.");
    } else if (choice === '3') {
      console.log("Now you're getting on my nerves.");
    } else if (choice === '4') {
      console.log("Stop playing with me just use a calculator.");
    }

    // check if user wants another calculation
    // stop the loop if answer is no
    let next_calculation = prompt("Do you want me to do another one?");
    if (next_calculation.toLowerCase() === "no") {
      break;
    }
  } else {
    console.log("Ok, goodbye bully.");
  }
}
