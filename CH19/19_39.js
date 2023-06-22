// 프로토타입 메서드 변경
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};
me.sayHello(); // Hi! My name is Lee

// 프로토타입 메서드 삭제
delete Person.prototype.sayHello;
me.sayHello(); // TypeError: me.sayHello is not a function
