//on the content load we are getting our form element in which edu-info is
// shown and adding the unique class to element which will be mainted in the coming unique elements

document.addEventListener("DOMContentLoaded", () => {
  const eduInfo = document.getElementById("eduinfo");

  localStorage.setItem("idSequ", "1");

  const newGroup = makeEduDetailsSection();

  eduInfo.appendChild(newGroup);
});

function addFormGroup(event) {
  event.preventDefault();
  const eduInfo = document.getElementById("eduinfo");
  const newGroup = makeEduDetailsSection();
  eduInfo.appendChild(newGroup);
}

function deleteEle(event) {
  const childNodeCount = document.getElementById("eduinfo").childElementCount;
  const tar = event.target.parentElement;

  if (childNodeCount > 1) {
    tar.remove();
  }
}

function SubmitDetails(event) {
  event.preventDefault();

  const fName = document.getElementById("firstName").value;
  const lName = document.getElementById("lastName").value;

  const eduInfo = document.getElementById("eduinfo").children;

  const educationDetails = Array.from(eduInfo).map((grop, index) => {
    const group = grop.children;
    const temp = {};
    Array.from(group).map((ele, index) => {
      if (index > 2) {
        return;
      }

      const label = ele.firstElementChild.innerHTML;
      const inp = ele.lastElementChild.value;

      temp[label] = inp;
    });
    return temp;
  });

  const userdata = {
    firstName: fName,
    LastName: lName,
    educationDetails: educationDetails,
  };
  console.log(userdata);

  setTimeout(() => {
    location.reload();
  }, 10000);
}

//help us make form-group
function makeEduDetailsSection() {
  const idNum = JSON.parse(localStorage.getItem("idSequ"));
  const mainDiv = document.createElement("div");
  const unq = generateUniqueID();
  const classvalue = "eduinput" + " " + unq;
  mainDiv.setAttribute("class", classvalue);

  const ids = ["Degree", "Year", "Institution"];
  for (let i = 0; i < 3; i++) {
    //creates degree div
    const lablesAndInput = document.createElement("div");
    lablesAndInput.setAttribute("class", "leb-in");

    //creates
    const label = document.createElement("label");
    label.setAttribute("for", `${ids[i] + idNum}`);
    label.innerHTML = ids[i];

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", `${ids[i] + idNum}`);

    lablesAndInput.appendChild(label);
    lablesAndInput.appendChild(input);

    mainDiv.appendChild(lablesAndInput);
    localStorage.setItem("idSequ", JSON.stringify(idNum + 1));
  }

  const button = document.createElement("button");
  button.setAttribute("class", "dlt");
  button.setAttribute("id", `${"dlt" + idNum}`);
  button.addEventListener("click", function (event) {
    event.preventDefault();
    deleteEle(event);
  });
  button.innerText = "Delete";

  mainDiv.appendChild(button);

  return mainDiv;
}

// has been copied
// Function to generate a unique ID using the current timestamp and random string
function generateUniqueID() {
  const timestamp = Date.now(); // Get the current timestamp in milliseconds
  const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string (alphanumeric)
  return `${timestamp}-${randomString}`; // Combine both for uniqueness
}

























//old code to add
// // const eduinput = document.getElementById("eduinfo");
// // const child = eduinput.childElementCount;
// // console.log(child)

// const lstChild = document.getElementById("eduinfo").lastElementChild;
// const clonedEle = lstChild.cloneNode(true);
// const childs = clonedEle.children;

// Array.from(childs).map((ch) => {
//   console.log(ch);
// });
// // let clsmain = clonedEle.classList;
// // let clsdlt = clonedEle.lastElementChild.classList;

// //remove the input values so that these can't clonded to the new
// //also try to update the id's of corresponding elements so tht you can accesss the value
// // clsmain.replace(child, child + 1);
// // clsdlt.replace(child, child + 1);
// // const id = JSON.parse(localStorage.getItem("idSequ"));
// // console.log(clonedEle)

// // eduinput.appendChild(clonedEle);
