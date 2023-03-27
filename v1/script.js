const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// console.log((CATEGORIES.find((cat)=>cat.name==="society")).color);     awesome , amazing knowledge ❤❤❤


console.log("thankful , gratefull , blessfull ");

//Selecting DOM elements
const btn = document.querySelector(".btn-open");

console.log(btn);
console.dir(btn);

const factsList = document.querySelector(".facts-list");
console.dir(factsList);

//Creating(wow 😲) DOM elements .
factsList.innerHTML = "";
// factsList.insertAdjacentHTML("afterbegin","<li> Aashish Kumar </li>");
// factsList.insertAdjacentHTML("afterbegin","<li> Ritik kamboj </li>");

// load data from Supabase

loadfacts();

async function loadfacts() {
  const res = await fetch(
    "https://nmyqejypocmdokceenvd.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5teXFlanlwb2NtZG9rY2VlbnZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0ODg5NjEsImV4cCI6MTk5MzA2NDk2MX0.mNhRBeHXPlv3TwbTUV4iemtW7pX7EMORJxugIywde4s",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5teXFlanlwb2NtZG9rY2VlbnZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0ODg5NjEsImV4cCI6MTk5MzA2NDk2MX0.mNhRBeHXPlv3TwbTUV4iemtW7pX7EMORJxugIywde4s",
      },
    }
  );

  const data = await res.json();
  console.log(data)
  console.log(res);


  // filtering the data where the category value is society 
// const filterData =  data.filter((fact)=>fact.category==="Society");
// console.log(filterData);

  createFactList(data);


}

//Filter function on Array 👍

const arr15=[2,76,3,11,10,9].filter((el)=> el>10);
console.log(arr15);

console.log([2,76,3,11,10,9].filter((el)=>el>10));

//find function on Array 


console.log([2,76,3,11,10,9].find((el)=>el>10));



// const res = fetch("https://nmyqejypocmdokceenvd.supabase.co/rest/v1/facts",{
//   header : {
//     apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5teXFlanlwb2NtZG9rY2VlbnZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0ODg5NjEsImV4cCI6MTk5MzA2NDk2MX0.mNhRBeHXPlv3TwbTUV4iemtW7pX7EMORJxugIywde4s",
//     authorisation : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5teXFlanlwb2NtZG9rY2VlbnZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0ODg5NjEsImV4cCI6MTk5MzA2NDk2MX0.mNhRBeHXPlv3TwbTUV4iemtW7pX7EMORJxugIywde4s",

//   },
// });

// console.log(res);

// createFactList(initialFacts);
// createFactList([{text:"Ritik", category: "Kamboj"}])    // as we applied 'afterbegin' so this fact comes on top of initialFacts

function createFactList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
  <p >${fact.text}. 
      <a class="source" href=${fact.source} target="_blank">(Source)</a>
  </p>
      <span class="tag" style="background-color:${(CATEGORIES.find((cat)=>cat.name===fact.category)).color} ">${fact.category}</span>
      
      </li>`
  );

  console.log((CATEGORIES.find((cat)=>cat.name==="society")).color); 

  console.log(htmlArr);

  const html = htmlArr.join("");

  console.log(html); // to make a big string from an array of three elements .

  factsList.insertAdjacentHTML("afterbegin", html);
}

const form = document.querySelector(".fact-form");

// Toggle Form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

/*

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

// ForEach function
//forEach is a function and we also define function inside it , so basically its function inside function , wow 😲

let arr = [2,4,6,8];

 const arr1=arr.forEach(function(el)
{
  console.log(el);
  // retrun (el+1);  // it showing runtime error 
})
// but we prefer here map() method ..

arr2= arr.map(function(el){

  return (el*10);
});

console.log(arr2);

// let's use arrow fucntion in above function 

//  const arr3 = (el) => el*5;

//  console.log(arr3(...arr));    wrong implementation 

let arr3 = arr. map((el)=> el*5);

console.log(arr3);


// below is the array of objects, wow😲👌  .
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// we want an array which have only name  , we can do that with help of map method 


const arr4 = CATEGORIES.map((el)=>el.name);
console.log(arr4);

// we have to calculate the age of fact from data.js file 

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const arr6 = initialFacts.map((el)=>calcAge(el.createdIn));

console.log(arr6);

*/
