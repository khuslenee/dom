// create the  div element
//const newDiv = document.createElement("DIV");

//add id to the
//newDiv.id = "container";

//
////newDiv.innerHTML = "Hello World";

//
//document.body.appendChild(newDiv);

//
//const newP = document.createElement("p");

//
///newP.id = "text";

//newP.style.color = "red";
//newP.style.fontSize = "10px";
//////newP.style.fontFamily = "Arial";

//newP.innerHTML = "Hello World";

//newDiv.appendChild(newP);

// const showButton = document.getElementById("show-button");
// showButton.addEventListener("click", function () {
//   const text = document.getElementById("text");
//   text.innerHTML = "Surpise!";
// });
// const eraseButton = document.getElementById("erase-button");
// eraseButton.addEventListener("click", function () {
//   const text = document.getElementById("text");
//   text.innerHTML = "";
// });

// let firstname = "";
// let lastname = "";
// let email = "";

// const firstNameInput = document.getElementById("first-name");
// firstNameInput.addEventListener("input", function () {
//   firstname = event.target.value;
//   console.log(firstname);
// });

// const lastNameInput = document.getElementById("last-name");
// lastNameInput.addEventListener("input", function () {
//   lastname = event.target.value;
//   console.log(lastname);
// });

// const emailInput = document.getElementById("email");
// emailInput.addEventListener("input", function () {
//   email = event.target.value;
//   console.log(email);
// });

// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", function () {
//   if (firstname === "" || lastname === "" || email === "") {
//     alert("please fill in all the fields ");
//   } else {
//     console.log({ firstname, lastname, email });

//     firstNameInput.value = "";
//     lastNameInput.value = "";
//     emailInput.value = "";
//   }
// });

let firstnumber = "";
let secondnumber = "";

const firstNumberInput = document.getElementById("first-number");
firstNumberInput.addEventListener("input", function () {
  firstnumber = event.target.value;
  console.log(firstnumber);
});

const secondNumberInput = document.getElementById("second-number");
secondNumberInput.addEventListener("input", function () {
  secondnumber = event.target.value;
  console.log(secondnumber);
});

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  if (firstnumber === "" || secondnumber === "") {
    alert("please fill in all the fields ");
  } else {
    let num1 = Number(firstnumber);
    let num2 = Number(secondnumber);
    let sum = num1 + num2;

    console.log("Sum:", sum);

    const sumDisplay = document.getElementById("sum-display");
    sumDisplay.textContent = `Sum: ${sum}`;

    firstNumberInput.value = "";
    secondNumberInput.value = "";
  }
});

// const newDiv = document.createElement("div");
// newDiv.id = "outercircle";
// document.body.appendChild(newDiv);
// newDiv.style.height = "500px";
// newDiv.style.width = "500px";
// newDiv.style.color = "red";
// newDiv.style.backgroundColor = "black";
// newDiv.style.fontFamily = "Arial";
// newDiv.style.borderRadius = "50%";
// newDiv.style.display = "flex";
// newDiv.style.justifyContent = "center";
// newDiv.style.alignItems = "center";

// const newDiv1 = document.createElement("div");
// newDiv1.id = "innercircle";
// newDiv.appendChild(newDiv1);
// newDiv1.style.height = "300px";
// newDiv1.style.width = "300px";
// newDiv1.style.color = "red";
// newDiv1.style.backgroundColor = "white";
// newDiv1.style.fontFamily = "Arial";
// newDiv1.style.borderRadius = "50%";
