const user = {
    name: 'Bob',
    age: 25,
    isStudent: true
}
console.log(user)
const user_1 = user

user_1.name = 'Anna'
console.log(user_1)

const userCopy = {}
userCopy.name = user.name
userCopy.age = 36
userCopy.isStudent = false
console.log(userCopy)

const userCopy_2 = {...user, city: 'London'}
console.log(userCopy_2)

const address = {
    country: 'Greece',
    city: 'Athens'
}

const userCopy_3 = {...user, ...address}
console.log(userCopy_3)

const userDeep = {
    name: 'Bob',
    age: 25,
    isStudent: true,
    address: {
        country: 'Greece',
        city: 'Athens'
    }
}
console.log(userDeep)

const userDeep_1 = {...userDeep}
console.log(userDeep_1)


const userDeep_2 = {...userDeep, address: {...userDeep.address, city: 'Minsk'}}
console.log(userDeep_2)

console.log(userDeep)
console.log(userDeep_2)

const arrUser = {
    id: 1,
    name: 'Bob',
    age: 25,
    isStudent: true,
}
const arrUserAddress = [
    {id: 1, country: 'Greece', city: 'Athens'},
    {id: 2, country: 'Belarus', city: 'Minsk'},
]
console.log(arrUserAddress.filter(a => a.id === arrUser.id))

const arrUserDeep = [
    {
        id: 1,
        name: 'Bob',
        age: 25,
        isStudent: true,
        address: {
            country: 'Greece',
            city: 'Athens'
        }
    },
    {
        id: 2,
        name: 'Ben',
        age: 35,
        isStudent: false,
        address: {
            country: 'Belarus',
            city: 'Minsk'
        }
    },
    {
        id: 3,
        name: 'Kok',
        age: 58,
        isStudent: true,
        address: {
            country: 'Italy',
            city: 'Rim'
        }
    },
    {
        id: 4,
        name: 'Fak',
        age: 12,
        isStudent: true,
        address: {
            country: 'Russia',
            city: 'Omsk'
        }
    },
]

const newUser = {
    id: 5,
    name: 'Lol',
    age: 18,
    isStudent: false,
    address: {
        country: 'Ukraine',
        city: 'Kiev'
    }
}

const arrUserDeep_2 = [...arrUserDeep]
console.log(arrUserDeep)
console.log(arrUserDeep_2 === arrUserDeep)

const arrUserDeep_3 = [...arrUserDeep, newUser]
console.log(arrUserDeep_3)

const arrUserDeep_4 = arrUserDeep_3.map(u => u.name === 'Lol' ? {...u, name: 'Klark'}:u)
console.log(arrUserDeep_4)

