const name = 'A';
const userAge = 27;

const userInfo = {
    name,
    age: 27,
    location: 'NY'
}

const user = {
    id:1324154,
    ...userInfo
}
console.log(user);

let {id} = user;
console.log(id)
