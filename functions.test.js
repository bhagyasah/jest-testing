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

//  promises
test('User fetched name should be Leanne Graham witn promises', () =>{
     expect.assertions(1);
   return functions.fetchUser().then( data => {
        expect(data.name).toEqual('Leanne Graham');
    })
})


// Asyc await

test('User fetched name should be Leanne Graham  with asyc await process'  , async() =>{
    expect.assertions(1);
  const data=await functions.fetchUser();
     expect(data.name).toEqual('Leanne Graham');
   
});



// reverseString

test(' checking reverse string',() => {
    expect
})
