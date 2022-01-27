// IMPORT MODULES under test here:
import {
    myFunction,
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,

} from '../functions.js';

const { test, skip } = QUnit;

test('bunny rabbit should become bunny rabbit!!!', (expect) => {
    //Arrange
    //Arguments and expectations
    const expected = 'bunny rabbit!!!';

    //Act
    //Call function and set result to constant
    const actual = addExclamationPoints('bunny rabbit');

    //Expect
    //Make assertions about what is expected versus actual
    expect.equal(actual, expected);
});

//TEST 2
test('This function should take in 4 and multiply it by seven', (expect) => {
    const expected = 28;
    const actual = multiplyBySeven(4);
    expect.equal(actual, expected);
});
test('This function should take in 0 and multiply it by seven', (expect) => {
    const expected = 0;
    const actual = multiplyBySeven(0);
    expect.equal(actual, expected);
});
test('This function should take in 7 and multiply it by seven', (expect) => {
    const expected = 49;
    const actual = multiplyBySeven(7);
    expect.equal(actual, expected);
});

//TEST 3
test('this function should take in 4 and return 24', (expect) => {
    const expected = 24;
    const actual = multiplyBy12ThenHalve(4);
    expect.equal(actual, expected);
});
test('this function should take in 12 and return 72', (expect) => {
    const expected = 72;
    const actual = multiplyBy12ThenHalve(12);
    expect.equal(actual, expected);
});
test('this function should take in 3.5 and return 21', (expect) => {
    const expected = 21;
    const actual = multiplyBy12ThenHalve(3.5);
    expect.equal(actual, expected);
});

//TEST 4
test('this function should take in 8 divide it by 4 and multiply the result by 5 equalling 10', (expect) => {
    const expected = 10;
    const actual = divideThenMultiply(8, 4, 5);
    expect.equal(actual, expected);
});
test('this function should take in 12 divide it by 2 and multiply the result by 3 equalling 18', (expect) => {
    const expected = 18;
    const actual = divideThenMultiply(12, 2, 3);
    expect.equal(actual, expected);
});

//TEST 5   
test('this function should take in 1, 2, and 3 and return [1, 2, 3]', (expect) => {
    const expected = [1, 2, 3];
    const actual = returnAsAnArray(1, 2, 3);
    expect.deepEqual(actual, expected);
});
test('this function should take in 4, 5, 6 and return [4, 5, 6]', (expect) => {
    const expected = [4, 5, 6];
    const actual = returnAsAnArray(4, 5, 6);
    expect.deepEqual(actual, expected);
});
test('this function should take in null, 0, and 1 and return [null, 0, 1]', (expect) => {
    const expected = [null, 0, 1];
    const actual = returnAsAnArray(null, 0, 1);
    expect.deepEqual(actual, expected);
});

//TEST 6
test('This function should take in 8,4,5 and return those numbers mushed together as a string 845 ', (expect) => {
    const expected = '845';
    const actual = returnAsAString(8, 4, 5);
    expect.equal(actual, expected);
});
// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

//     expect.equal(actual, expected);
// });


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

