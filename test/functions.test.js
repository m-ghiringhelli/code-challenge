// IMPORT MODULES under test here:
import {
    myFunction, 
    addExclamationPoints, 
    multiplyBySeven,
    multiplyBy12ThenHalve,
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
test('This function should take in a number and multiply it by seven', (expect) => {
    const expected = 28;
    const actual = multiplyBySeven(4);
    expect.equal(actual, expected);
});
test('This function should take in a number and multiply it by seven', (expect) => {
    const expected = 0;
    const actual = multiplyBySeven(0);
    expect.equal(actual, expected);
});
test('This function should take in a number and multiply it by seven', (expect) => {
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

