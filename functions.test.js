const functions=require('./functions');
const axios =require('axios');
// regex ("regular expressions")


test("there is no I in the team", () => {
    expect('team').toMatch(/team/)
})


// Arays

test("admin should be in username",() =>{
    const userNames=['mangru',"dhepu","loolia"];

    expect(userNames).toContain("dhepu");
})

//  working with asyc data or json server

test('User fetched name should be Leanne Graham', () =>{
    expect.assertions(1);
    return functions.fetchUser().then( data => {
        expect(data.name).toEqual('Leanne Graham');
    })
})