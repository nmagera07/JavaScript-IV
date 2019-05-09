// CODE here for your Lambda Classes

// Main class - Person
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

// Children classes
class Instructor extends Person {
     constructor(instructorAttrs) {
        super(instructorAttrs) 
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
     }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    }


class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        return listsSubjects;
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

// Students
const harry = new Student({
  name: 'Harry',
  location: 'Manhattan',
  age: 24,
  favSubjects: ['HTML', 'CSS', 'JavaScript'],
  previousBackground: 'worked at Oscorp',
  className: `CS132` 
})

const peter = new Student({
  name: 'Peter',
  location: 'Queens',
  age: 23,
  favSubjects: ['React', 'Python'],
  previousBackground: 'Spider-Man',
  className: `CS132` 
})

const flash = new Student({
  name: 'Flash',
  location: 'Queens',
  age: 22,
  favSubjects: ['React', 'CSS'],
  previousBackground: 'Venom',
  className: `CS132` 
})


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});



const jack = new ProjectManagers({
  name: 'jack',
  location: 'computer',
  age: 40,
  favLanguage: 'python',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the snacks` 
})


console.log(fred.location)
console.log(joe.name)
console.log(jack.standUp(2345))
console.log(jack.debugsCode('peter', 'java'))