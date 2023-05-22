var x = "global";

function foo() {
  console.log(x); // -1-
  var x = "local";
}

foo();
console.log(x); // global
