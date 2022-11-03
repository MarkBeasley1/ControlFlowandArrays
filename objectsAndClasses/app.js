console.log("Connected!")

//const house = [
 //   doors: 9
//]
//house.windows = 30;

//console.log(house);

//house.bathrooms = 7;

//house.hasGarden = true;
//console.log(house);

//const myPet = {
   // name: "Fluffy",
    //age: 3,
    //favoriteThings: ["playing", "belly rubs' "treats"],
   // canSpeakFrench: false,
    //canSolveRubixCibe; true,
//}

//console.log(myPet);

const obj = {
    salutation: 'hi',
    count:4

}

if(obj.salutation === "hi") {
    console.log('ok');
}

for (let i = 0; i < obj.count; i++) {
    console.log(i);
}

let result = obj.hasOwnProperty('salutation');
console.log(result)
