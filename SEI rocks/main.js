const button = document.querySelector('button');
button.addEventListener('click', (event)=>{
    console.log(event)
});
const li = document.createElement('li');
console.log(li);

const input = document.querySelector('input');
li.textContent = input.value;
console.log(li);
document.querySelector('ul').appendChild(li)
input.value ="";

document.querySelector('ul').addEventListener('click' ,handleClick);
 
function handleClick(event) {
    console.log(event);
}
comments.style.color = rainbow();
comments.
