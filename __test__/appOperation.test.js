const appOperations = require('../src/appOperations');

test("multiplication of zero", ()=>{
    expect(appOperations.multiply(5,0)).toBe(0);

})
test("adding two values", ()=>{
    expect(appOperations.add(5,5)).toBe(10);

})

test("test substraction", ()=>{
    expect(appOperations.substract(15,5)).toBe(10);

})