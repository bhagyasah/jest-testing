const functions=require('./functions');

test("5 + 5 to be 10 ",() => {
    expect(functions.add(5,5)).toBe(10)
})


test("5 + 5 to be not equal to 10 ",() => {
    expect(functions.add(5,5)).not.toBe(9)
})

// checking truthy or falsy value
// tobeNull matches only null  or toBeUndefined  matchds ony only undefined
// tobedefined is equal to defined
// tobedefined is opposite to undefined
//   tobetruthy matches anything that if statements treats as true
// tobefalsy matches anythinf that if statement treats as falsy

test("outcome should be equal to null ",() => {
    expect(functions.isNull()).toBeNull()
})