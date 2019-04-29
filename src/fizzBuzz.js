
function FizzBuzz() {
};

FizzBuzz.prototype.play = function (number) {
  if (number % 3 == 0 && number % 5 == 0) { return 'FizzBuzz' };

  if (number % 5 == 0) { return 'Buzz' };

  return number % 3 == 0 ? "Fizz" : number;
}

var fizzbuzz = new FizzBuzz()
for (let i = 0; i <= 100; i++) {
  console.log(fizzbuzz.play(i))
}
