var x = "global";

function foo() {
  var x = "local";
  console.log(x); // -1-
}

foo();

console.log(x); // -2-
