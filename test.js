const test = require('node:test');
const assert = require('node:assert');

const { add, subtract, mul, div } = require('./index');

test('ensure arith optrs work', (t) => {
    // test addition
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(add(-1, 1), 0);
    assert.strictEqual(add(0, 0), 0);

    // test subtract
    assert.strictEqual(subtract(5, 1), 4);
    assert.strictEqual(subtract(0, 0), 0);
    assert.strictEqual(subtract(-1, -1), 0);

    // test multiplication
    assert.strictEqual(mul(-1, -1), 1);
    assert.strictEqual(mul(0, 0), 0);
    assert.strictEqual(mul(1, -1), -1);

    // test divivision
    assert.strictEqual(div(1, 1), 1);
    assert.strictEqual(div(10, 5), 2);
    assert.strictEqual(div(15, 5), 3);
});

// test for division by zero
test('test for division by zero(0)', () => {
    assert.throws(() => div(1, 0), {
        message: "Cannot divide by zero"
    });
});