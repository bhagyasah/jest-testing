const functions=require('./functions');

// regex ("regular expressions")


test("there is no I in the team", () => {
    expect('team').toMatch(/team/)
})


// Arays

test("admin should be in username",() =>{
    const userNames=['mangru',"dhepu","loolia"];

    expect(userNames).toContain("dhepu");
})