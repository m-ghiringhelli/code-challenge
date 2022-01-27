// IMPORT MODULES under test here:
import {
    myFunction, addExclamationPoints, multiplyBySeven,
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

