const timmy = new Person('Timmy')
for(let i =0; i < 5; i++){
  timmy.ageUp()
}
for(let i =0; i < 5; i++){
  timmy.eat()
}
for(let i =0; i < 5; i++){
  timmy.exercise()
}
for(let i =0; i < 9; i++){
  timmy.ageUp()
}
const gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster(gus)

for(let i =0; i < 15; i++){
  timmy.ageUp()
}
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()