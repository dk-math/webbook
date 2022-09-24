const chai = require("chai");
const expect = chai.expect;

const myFunc = function(a, b){
    return a+b;
};

describe("good", () => {
    it("When click, add good counts", () => {
      expect(myFunc(1, 2)).to.equal(1);
    });
  });