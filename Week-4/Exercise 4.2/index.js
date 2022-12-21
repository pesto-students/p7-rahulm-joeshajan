function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Teacher(name, age, subject) {
  Person.call(this, name, age);
  // this.subject = subject;
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

const joe = new Teacher("joe", 22);
joe.teach("english");
