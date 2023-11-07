interface User{
    name : string,
    age: number
}

const MyUser = (user: User)=>{
    return user;
}

const murilo = MyUser({
    name: 'Murilo',
    age: 24
})

console.log(murilo);