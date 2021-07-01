





var alam = {
    id: '1234',
    name: 'akash',
    age: 10
}


console.log(alam.id);


let myArray = ['akash', 'alam', 'hamim']

console.log(myArray[1]);


let name = [
    {
        id: 1,
        name: 'akash',
        age: 10
    },
    {
        id: 2,
        name: 'sky',
        age: 10
    },
    {
        id: 3,
        name: 'hamim',
        age: 10
    },
    {
        id: 4,
        name: 'alam',
        age: 10,
        hobby : ['reading', 'listening', 'swimming']
    }
]


console.log(name[3].hobby[2]);

let akash = name.map((item, index) => {
    return index
})

console.log(akash);



