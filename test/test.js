const chai = require("chai");
const assert = chai.assert;

const myFunc = function(a, b){
    return a+b;
};

describe('テストのタイトル', function () {
    it('myFuncのテスト', function() {
      assert.strictEqual(myFunc(1, 2), 3);
    });
  });