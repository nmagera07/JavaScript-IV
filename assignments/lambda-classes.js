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


class Student extends Instructor {
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

class ProjectManagers extends Student {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const joe = new Student({
  name: 'joe',
  location: 'world',
  age: 24,
  favLanguage: 'React',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the dudes` 
})

console.log(fred.location)
console.log(fred.favLanguage)
console.log(joe.specialty)