const appOperations = require('../src/appOperations');

test("multiplication of zero", ()=>{
    expect(appOperations(5,0)).toBe(0);

})