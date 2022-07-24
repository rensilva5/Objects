let studentInfo = {
    name: 'Renzo',
    age: 10,
    inClass: true
}

console.log(studentInfo)      //prints out my info
console.log(studentInfo.name) // prints out only my name

studentInfo.age = 20        // Changes age 10 to age 20
console.log(studentInfo.age)  //Prints out 20

// --- Lab2

let teacher = {
    name: "Jhon",
    classes: [],
    currentlyTeaching: true
}
console.log(teacher)      // teacher's info
teacher.classes.push('Maths')  // add maths to classes inside the array
teacher.classes.push('Arrays') // add arrays into classes inside the array

console.log(teacher.name)  //prints out Jhon
console.log(teacher.classes) // prints out classes recently added (maths, arrays)
console.log(teacher)  // prints out teacher with updated info.  

// -----

TeacherAssistant = {
    name: "Paula",
    inClass: true,
}
console.log(TeacherAssistant)  // prints teacherAssistant into => Paula and true
TeacherAssistant.Classes = []  // adds a new property with an array as value
TeacherAssistant.Classes.push("Looping")  // adds or push "looping" inside the array in classes as new value
console.log(TeacherAssistant) // prints out updated info including new classes property with its new value ("looping")