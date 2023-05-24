// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명 함수 표현식
var anonymousFunc = function () {};
// ES5: 익명 함수 표현식의 함수 이름은 언제나 빈 문자열입니다.
// ES6: 익명 함수 표현식의 함수 이름은 함수 객체의 name 프로퍼티 값과 같습니다.
console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문(Function declaration)
function bar() {}
console.log(bar.name); // bar
