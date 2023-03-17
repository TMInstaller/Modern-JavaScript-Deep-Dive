// ES6에서 도입된 Object.is, === 보다 더 정확하게 보이는 대로 비교한다
-0 === +0; // -> true
Object.is(-0, +0); // -> false

NaN === NaN; // -> false
Object.is(NaN, NaN); // -> true
