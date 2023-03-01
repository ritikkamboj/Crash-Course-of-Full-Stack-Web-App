console.log("thankful , gratefull , blessfull ");

const btn = document.querySelector(".btn-open");

const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

// votesInteresting=votesInteresting+1;

// console.log("upvotes:",votesInteresting);

// let voteFalse= 4;

// let isCorrect = voteFalse<votesInteresting;

// console.log(isCorrect);

// console.log(parseInt("30.56gfgdf"));

// function to create a age of the fact

function calcAge(year) {
  const currentYear = new Date().getFullYear();

  let age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year.Year needs to be less than or equal to ${currentYear}`;
}

console.log(calcAge(2037));

let votesInteresting = 20;
let votesMindBlowing = 5;

if (votesInteresting === votesMindBlowing) {
  alert("value of both are equal ");
} else if (votesInteresting > votesMindBlowing) {
  console.log("Interesting fact !! ");
} else if (votesInteresting < votesMindBlowing) {
  console.log("MindBlowing facts !!");
}

// falsy value : 0, "", null, undefined

// truthy value : all value other than falsy value are truthy value .

if (votesMindBlowing) {
  console.log("fact is mind blowing ");
} else {
  console.log("not so special fact ");
}

let votesFalse = 4;

const votesTrue = votesInteresting + votesMindBlowing;

let messege =
  votesTrue > votesFalse
    ? " Fact is true "
    : " you need some more resources to verify the fact ";

// alert(messege);

const text = " Capital of australia now is 'Canberra'";

const text1 = text.toUpperCase();

console.log(text1);
// String literral or string tempelate

const text3 = `The current fact is "${text1}".The age of the fact is ${calcAge(
  2050
)}. The fact is probably ${votesTrue > votesFalse ? "correct" : "not true"}.`;

console.log(text3);

// Arrow function

const calcFactAge2 = (year) =>
  new Date().getFullYear() - year > 0
    ? new Date().getFullYear() - year
    : `Impossible year.Year needs to be less than or equal to ${new Date().getFullYear()}`;
// curly brackets laga ke undefined aa raha hai , why ?

console.log(calcFactAge2(2015));

// implementing code in arrow function , when the 'year'value is greater than current year
console.log(calcFactAge2(2037));

// Array

const box = ["Lisbon is the capital of portugal", 2015, true, "jai maata di"];

console.log(box);
console.log(box[2]);
console.log(box.length);
console.log(box[box.length - 1]);

// when we want to assign every element to a individual variable

const [text2, createdIn, isCorrect] = box;

console.log(isCorrect);

const [text4] = box;

console.log(text4);

const newBox = [box, "something new to add"];
console.log(newBox);
console.log(newBox.length); // newBox length comes out to be 2 , but we know actually it is 5

//spread operator
const newBox1 = [...box, "something new to add"];
console.log(newBox1);
console.log(newBox1.length);

// Javascript Objects

const factObj = {
  text9: "Lisbon is the capital of portugal",
  category: "Society",
  createdIn: 2015,
  isCorrect: "true",
};

console.log(factObj);

console.log(factObj.createdIn);
console.log(factObj["isCorrect"]);

// if we want the value of properties to be assigned to a variable 👇

const { category, text9 } = factObj;

console.log(category, text9);

const factObj2 = {
  text10: "Captital of australia is Canberra ",

  category: "Social",

  summary: function () {
    return `The fact that "${
      this.text10
    }" is a "${this.category.toUpperCase()}" fact`;
  },
};

console.log(factObj2.summary());
