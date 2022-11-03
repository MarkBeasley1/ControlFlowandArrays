// Q+A:
//1. we define the variable using int
//2. 
//3. 
//4. 
//5. pseudocoding is a description of the steps, it helps us understand what we want the code to do before we initialize it 
//6. 80% and 20%

//Strings:
var firstVariable = ("Hello World"),
    firstVariable = 1;
   let secondVariable = firstVariable;
   secondVariable = "any string";

console.log(firstVariable);
console.log(secondVariable);

const yourName = "Mark";
let hello = 'Hello, my name is ${yourName}';
console.log(hello);

// Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false || false)
console.log(e && 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a && a || d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 &&'48');

//The farm
let animal = prompt('Name an animal')
if (animal != "cow"){
    console.log("we dont know that animal")
    alert("we dont know that's a animal")
}
else if(animal === 'cow'){
    console.log('Moooooooooooo')
    alert('mooooooooooooooooooooo')
}

// Driver's Ed
let drivinAge = 18;
const drivingAllowed = (age) => {
    return age >= 16? "Here are the keyt" : "Sorry, you're too young";
}
console.log(drivingAllowed(drivingAge));

const countToTen = () => {
    for(let i = 1; i <= 10; i ++){
        console.log(i)
    }
}
countToTen();

const countToFourHundred = () => {
    for(let i = 10 i < = 400; i ++){
        console.log(i)
    }
}
countToFourHundred();

// get even
const printEven = () => {
    for(let i = 1 <= 100; i ++){
        if(i%2 ! == 0){
            console.log(i)
            continue
        }else {
            console.log('${i}: is even')
        }
    }
}
//give me 5
for(let i=1; i<=100; i++) {
    console.log("I found a" + i + ". High five!");

}if (i % 3 == 0) {
    console.log("I found a" + i + ". Three is a crowd");

}else {console.log(i);
}


//print 5
useFunctions();

//bank account 
let totalAccount=[1,2,3,4,5,6,7,8,9,10];
bankAccount=0;
totalAccount.forEach(element => {
    bankaccount+=element;

})

//talk about it
//1. elements
//2. yes
//3. any list of periodic elements

//easy does it
const quotes = ['get er done', 'a rose is a rose', 'tibby or not tibby'];

//accessing elements
const randomThins = [1,10, "hello", true]
randomThings[0];
randomThings[2] = "World";
console.log(randomThings);

//changing values
const ourClass = ['Salty', 'zoom', 'sardine', 'slack', 'github'];
ourClass[2];
ourClass[ourClass.length - 1] = 'octocat';
console.log(ourClass[4])
ourClass.push('cloud city')
console.log(ourClass);

//mixing it up
const myArray = [5, 10, 500, 20];
myArray.push('Aegon');
myArray.push("fredo");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();





//getTwoLengths
function getTwoLengths (string1, string2){
    let array1= [string1.length, string2.length]
    console.log(array1)
    return array1
}
getTwoLengths("123", "1234")

function getTwoLength (string1, string2){
        let array1=[]
        array1.push(string1.length)
        array1.push(string2.length)
        console.log(array1)
        return array1
}
getTwoLength("123", "1234")

//getMultipleLengths
function getMultipleLengths(strings){
    const output = [];
    for(let string of strings){
        output.push(string.length);
    }
    return output;
}
getMultipleLengths()

//maxOfThree
function maxOfThree(a,b,c){
    let max = a;
    if(b > max) max = b;
    if(c > max) max = c;
    return max;
}
console.log(97, 101, 22)

//printLongestWord
function printLongestWord(words) {
    let longest = words[0];
    for(let i = 1; i < words.length; i++){
        if(words[i].length > longest.length) longest = words[i];
    }
    return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//Objects:

const user = {
    name: 'Mark' ,
    email: 'markbeasley@yahoo.com',
    age: '22',
    purchased:[]
};

// Update the user
user.email = 'newemail@example.com';
user.age ++;
user.location = 'Denver';
user.purchased.push('carbs');
user.purchased.push('PS5');
user.purchased.push('hat');
console.log(user);
console.log(user.purschased[2]);

user.friendObject = {
    name: 'John Doe',
    age: 34,
    location: 'Atlanta',
    purchased: [],
};

console.log(user.friendObject.name);
console.log(user.friendObject.location);
user.friend.age = 55;
user.friendObject.purchased.push('that one ring');
user.friendObject.purchased.push('a latte');
console.log(user);
console.log(user.friendObject.purchased[1]);

// Adding keys and values

const getFriendsPurchase = (friend) => {
    user.friendObject.purchased.forEach((purchase) => console.log(purchase));
}
    
getFriendsPurchase(user.friendObject); {}

const updateUser = () => {
        user.age ++;
        user.name = user.name.toUpperCase();
        console.log(user);
    };
updateUser();








