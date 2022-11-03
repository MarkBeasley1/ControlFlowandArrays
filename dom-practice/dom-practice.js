let title = document.getElementById("title");
title.style.textAlign ='center';
console.log(title);


let paragraph = document.querySelector(".cool")
console.log(paragraph);


//add an html plain text

paragraph.textContent += "Hello World!";
console.log(paragraph.textContent);


//innerHTML

paragraph.innerHTML += `<a href="google"> google </a>`

paragraph.innertHTML = "Comments for <strong>Today</strong>";
paragraph.textContent = "Comments for <strong>Today</strong>";


//changing the style of an element

title.style.textAlign = "center";
paragraph.style.color = "red";

console.log(paragraph.getAttribute('class'));
console.log(paragraph.getAttribute('id'));

paragraph.setAttribute('id', 'helloWord')

let anchor = document.querySelector("a");
anchor.setAttribute("href", "http://www.google.com/");

let list = document.getElementsByTagName("li")
console.log(list[0]);

let list2 = document.getElementsByTagName("li")
console.log(list2[0]);

let comments = document.querySelectorAll(".comment");
console.log(comment);
///for of

for (const comment of comments) {
    console.log(comment);
}

//for each

comments.forEach(function (comment){
console.log(comment, i);
});

//for each with arrow function

comments.forEach((comment)=>{console.log(comment)})

document.querySelectorAll(".comment");

for(let comment of comments) {
    console.log(comment);
    comment.setAttribute("style", "font-size: 30px")
}


