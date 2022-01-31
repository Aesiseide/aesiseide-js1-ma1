//question 1
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// question 2

const cat = {
  complain: () => {
    console.log("Meow!");
  },
};

cat.complain();

// question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//question 3
heading.style.fontSize = "2em";

// question 4
heading.setAttribute("class", "subheader");

// question 5
var paragraphs = document.querySelectorAll("p");

for (let paragraph of paragraphs) {
  paragraph.style.color = "red";
}

// question 6

var resultsContainer = document.querySelector(".results");

var newParagraph = document.createElement("p");
newParagraph.innerHTML = "New Paragraph";
resultsContainer.appendChild(newParagraph);

// question 7
function nameLogger(list) {
  for (let element of list) {
    console.log(element.name);
  }
}

nameLogger(cats);

// question 8

var catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  var tempCatContainter = document.createElement("div");
  for (let cat of cats) {
    var newDiv = document.createElement("div");
    var newH5 = document.createElement("h5");
    var newP = document.createElement("p");
    newH5.innerHTML = cat.name;
    newP.innerHTML = cat.age ? cat.age : "Age unknown";
    tempCatContainter.appendChild(newDiv);
    newDiv.appendChild(newH5);
    newDiv.appendChild(newP);
  }
  return tempCatContainter;
}

catContainer.appendChild(createCats(cats));
