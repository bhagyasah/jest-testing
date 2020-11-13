
const functions= {
    add: (num1,num2) => num1 + num2 ,
    isNull: () => null,
    checkValue: (x) => x,
    createValue: () => {
        const user={firstName:'ranjit'};
        user["lastName"]='shah';
        return user;
    },
    
};
module.exports=functions;

