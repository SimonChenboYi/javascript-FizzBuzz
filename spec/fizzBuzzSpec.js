describe("fizzbuzz",function(){

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("return Fizz when number is 3", function() {
    expect(fizzbuzz.play(3)).toEqual('Fizz')
  });

  it("return 1 when number is 1", function() {
    expect(fizzbuzz.play(1)).toEqual(1)
  });


  it("return Buzz when number is 5", function() {
    expect(fizzbuzz.play(5)).toEqual("Buzz")
  });


  it("return Fizz when number is 6", function() {
    expect(fizzbuzz.play(6)).toEqual('Fizz')
  });


  it("return Buzz when number is 10", function() {
    expect(fizzbuzz.play(10)).toEqual('Buzz')
  });


  it("return FizzBuzz when number is 15", function() {
    expect(fizzbuzz.play(15)).toEqual('FizzBuzz')
  });


  it("return FizzBuzz when number is 30", function() {
    expect(fizzbuzz.play(30)).toEqual('FizzBuzz')
  });


});