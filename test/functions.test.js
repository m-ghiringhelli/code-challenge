// IMPORT MODULES under test here:
import { 
    myFunction, addExclamationPoints,
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

