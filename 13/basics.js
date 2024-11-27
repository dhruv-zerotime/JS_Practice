// 1.   Write a function to convert Celsius to Fahrenheit

// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32

function celToFahren(cel) {
  let ans = cel * 1.8 + 32;
  return ans.toFixed(2);
}
console.log('cel to fahren',celToFahren(3))
// 2.   Write a function that returns the square of a number

function square(num) {
  return num * num;
}

console.log('square : ',square(4))
// 3.   Write a function that returns passed value is string or number

//Here we are assuming that val passed will be no. or string only conditons are given accordingly
function strOrNum(val) {
  return typeof val

}
console.log(strOrNum(7))
// 4.Write a function to add new dropdown list below the form

function addDropDown() {
  let dropdown = document.createElement("select");      //creating select element

  dropdown.setAttribute("id", "drop");
  dropdown.setAttribute("name", "drop");

  const selectVal = ["one", "two", "three", "four"]; //select Values to be added

  function addSelectValues(val) {                           //fun to add the options to the select element
    let op = document.createElement("option");
    let text = document.createTextNode(val);
    op.appendChild(text);
    op.setAttribute("value", val);
    dropdown.appendChild(op);
  }

  selectVal.forEach(addSelectValues);           //looping over the options and running fun for each to add the all the options

  document.forms[0].appendChild(dropdown);
//  document.getElementById("addForm").appendChild(dropdown);
}

// try to write without the help of internet

// !(true), !(2), !("ABC"), !(true), !!(true), !(false), !!(false)

console.log(!!(false))