
const assert = require('assert');

assert.equal(1, 1);    // OK, 1 == 1
assert.equal(1, '1');  // OK, 1 == '1'
// assert.equal(1, 2, "Error: 1 not equal to 2");    // AssertionError: 1 == 2
// assert.equal({a: {b: 1}}, {a: {b: 1}}); 
  // AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
  // { a: { b: 1 } }, { a: { b: 1 } } has different pointer.

 assert.throws (
    myFunction() => {
        throw new Error('Wrong Value');
    },
    // Error
);

