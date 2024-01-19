class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username:${this.username}`);
  }
  createId() {
    return `123@${this.username}`;
  }
}
const user1 = new User("Rohan");
console.log(user1.createId());
user1.logMe();
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
}

const user2 = new Teacher("Abhinav", "abhinav@gmail.com", "123abhivnav");
user2.logMe();
// console.log(user2.createId());
