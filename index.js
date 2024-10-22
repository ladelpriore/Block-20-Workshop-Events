//X Add Number button has an event listener and input field
//X User input is added to number bank
//X User input is displayed in the number bank
//--> Sort 1 button event listener for clicks
//--> Sort 1 button first number is moved
//--> Sort All button event listener for clicks
//--> Sort All button all numbers are moved


                                                                //Query selector grabs the first instance of the named element. 
const addNumberButton = document.querySelector("button");        //Grab the first instance of the button element, which is the Add Number button

addNumberButton.addEventListener('click', (event) => {           //Add an event listener for the Add Number button when it is clicked
    event.preventDefault();                                      //Prevent the form from refreshing
    const userInputNumber = document.querySelector('input');    //Grab the user input
    console.log(userInputNumber.value);                          //Test to see if working

const outputNumberBank = document.querySelector("output");      //Grab the first instance of the output element, which is the Number Bank output
    outputNumberBank.innerHTML = userInputNumber.value;         //Show the user inputted number in the Number Bank output field

});







