console.log("thankful , gratefull , blessfull ");

const btn=document.querySelector(".btn-open");

const form = document.querySelector(".fact-form");

btn.addEventListener("click",function(){
    if(form.classList.contains("hidden"))
    {
        form.classList.remove("hidden");
        btn.textContent="Close";
    }
    else{
        form.classList.add("hidden");
        btn.textContent="Share a Fact";
    }
    
})

let votesInteresting=23;
let votesMindBlowing=6;

const text= " Capital of australia now is 'Canberra'";

votesInteresting=votesInteresting+1;

console.log("upvotes:",votesInteresting);

let voteFalse= 4;

let isCorrect = voteFalse<votesInteresting;

console.log(isCorrect);

console.log(parseInt("30.56gfgdf"));

// function to create a age of the fact 

function calcAge(year)
{
    const currentYear=2022;

    let age = currentYear-year;
    return age;
}


console.log(calcAge(2015));


console.log(new Date().getFullYear());






