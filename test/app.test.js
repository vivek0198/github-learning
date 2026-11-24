const test = require("node:test");
const assert = require("node:assert");

function add(a, b) {
    return a + b;
}

test("Addition should return 10", () => {
    assert.strictEqual(add(5, 5), 10);
});

test("Addition should return 15", () => {
    assert.strictEqual(add(10, 5), 15);
});