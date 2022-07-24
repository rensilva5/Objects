
let person = {
    name: "Renzo",
    lastName: "Silva",
    age: 15,
    inClass: true,
    classesTaught: ['javascript', 'arrays']

}
person.hasGlasses = true  //Add new property
console.log(person)

person.name = 'Peter Pan' //edit the object
console.log(person) // prints out person's info with new name updated "Peter Pan"

// ---

const allProps = Object.keys(person)  // creates new const with Objects-keys properties
console.log(allProps)                 //prints all properties
const hasAge = allProps.indexOf('age') //!=-1
console.log(hasAge)

console.log(person.name)
delete person.name

let {name, age} = person
console.log(name)
console.log(age)

console.log(person.classesTaught)
console.log(person.classesTaught[1])    // prints out "arrays"
console.log(person['classesTaught'][0]) // another way to call and print a value ("javascript")
console.log(person['name'])

person.name = 'Renzo'
console.log(person.name,)

