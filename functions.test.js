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


// jest with life cycyle method

// const initialize= () => console.log('initialize the databse..');
// const closed= () => console.log('closed database..')

// beforeAll(() => initialize());
// afterAll(() => closed());

const namecheck= () => console.log("checking name .....")

describe('names check', () =>{
     beforeEach(() => namecheck());

     test('user is ranjit', () => {
        const user='ranjit'
       expect(user).toBe('ranjit')
    });


    test('user is bhagya', () => {
        const user='bhagya'
       expect(user).toBe('bhagya')
    });
   } 


)