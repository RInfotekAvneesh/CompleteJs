class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  get password() {
    return `${this._password}@123avneesh`;
  }
  set password(value) {
    this._password = value.toUpperCase();
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value.toUpperCase();
  }
  get name() {
    return this._name.toUpperCase();
  }
  set name(value) {
    this._name = value.toUpperCase();
  }
}

const user1 = new User("avneesh", "avnessh@gmail.com", "abc");
console.log(user1.password, user1.email, user1._name);
