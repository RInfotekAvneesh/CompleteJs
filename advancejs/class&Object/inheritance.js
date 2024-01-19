class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`User name is :${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`a new course added by :${this.username}`);
  }
}
const t1 = new Teacher("avneesh", "avneesh@gmail.com", "avneesh1213");
t1.addCourse();
t1.logMe();

const t2 = new User("Rajan");
t2.logMe();

console.log(t1 === t2);
console.log(t2 === Teacher);
console.log(t1 === User);
console.log(t1 instanceof Teacher);
console.log(t2 instanceof User);
