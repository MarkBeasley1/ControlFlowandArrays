////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++){
    console.log(i);
}
////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i<201; i++){
    if(i%2==0)
    console.log(i)
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i=1; i<101; i++){
    if(i%5==0 && i% 3==0 ){
    console.log(`${i}FizzBuzz`)}
    else if(i%5==0){
    console.log(`${i} Buz`)}
    else if(i%3==0){
        console.log(`${i} Fizz`)} 
    }   
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["Dart", "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++;
wolfy[3] ="Gotham City";
dart[3] ="Upside Down & Hawkins";
wolfy[0]= "Gameboy";
console.log(wolfy);
console.log(plantee);
console.log(dart);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
var ninjaTurtle = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (i=0; i<ninjaTurtle.length; i++){
    console.log(ninjaTurtle[i].toUpperCase());
}
ninjaTurtle.forEach(word=>{
    console.log(word.toUpperCase())
})
ninjaTurtle.map(word=>{
    console.log(word.toUpperCase())
})
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
'Jaws',
'The Fellowship of the Ring',
'Howl\'s Moving Castle',
'Django Unchained',
'Cloud Atlas', 
'The Usual Suspects',
'Toy Story',
'Conan the Barbarian',
'Titanic', 
'Harry Potter',
'Fried Green Tomatoes',
'Volver', 
'Oculus',
'Seven',
'Black Panther',
'Harry Potter',
'Imitation of Life',
'Snatch',
'Fast and Furious'];
favMovies.sort();
console.log(favMovies);
favMovies.pop();
favMovies.reverse();
favMovies.shift();
favMovies.unshift();
favMovies.splice([14]);
favMovies.push[14]
let halflength = favMovies.length /2

console.log(favMovies);
console.log(favMovies[8]);
console.log(halflength);

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////
let kittyTalk = ["Love me, pet me! HSSSSSS!"];
for (let i = 1; i <= 20; i++ ){
   console.log(`${kittyTalk} <--"Love me, pet me! HSSSSSS!"`)
  };
////////////////////////////////
//  Find the Median
///////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
function median(arr){
    let length = arr.length;
    let mid = math.floor(length/2);
    if(length % 2 ! = 0; {
        return arr[mid];
    } else{
        return (arr[mid - 1])/2
    }

}