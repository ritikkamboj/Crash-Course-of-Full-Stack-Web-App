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
  else return `Impossible year.Year needs to be less than or equal to ${currentYear}`;
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

const text= " Capital of australia now is 'Canberra'";

const text1= text.toUpperCase();

console.log(text1);
// String literral or string tempelate 

const text3 = `The current fact is "${text1}".The age of the fact is ${calcAge(2050)}. The fact is probably ${votesTrue>votesFalse ? "correct" : "not true"}.`;

console.log(text3);
