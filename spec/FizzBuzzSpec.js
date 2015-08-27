describe("FizzBuzz", function() {

  var fizzbuzz;

  describe("knows when a number", function() {

    beforeEach(function(){
      fizzbuzz = new FizzBuzz;
    });

    it("is divisible by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("is divisible by 5", function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it("is divisible by 15", function(){
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true)
    });

});

});
