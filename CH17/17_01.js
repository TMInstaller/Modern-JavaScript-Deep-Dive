// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = "Lee";
person.sayHello = function () {
  console.log(`Hello! My name is ${this.name}.`);
};

console.log(person); // {name: "Lee", sayHello: ƒ}
person.sayHello(); // Hello! My name is Lee.
