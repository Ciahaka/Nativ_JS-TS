let students = [
    {

        name: 'Bob',
        age: 25,
        isMarried: true,
        scores: 12
    },
    {

        name: 'Ben',
        age: 35,
        isStudent: false,
        scores: 42
    },
    {

        name: 'Kok',
        age: 58,
        isStudent: true,
        scores: 25
    },
    {

        name: 'Fak',
        age: 12,
        isStudent: true,
        scores: 188
    },
]
const funcName = (el) => el.name
// const getMeNamesStudents =(array)=>{
//     const result=[]
//     for (let i = 0; i < array.length; i++) {
//         result[i]=array[i].name
//     }
//     return result
// }
// console.log(getMeNamesStudents(students))
const funcScores = (el) => el.scores
// const getMeScoresStudents=(array)=>{
//
//     const result=[]
//     for (let i = 0; i < array.length; i++) {
//         result[i]=array[i].scores
//     }
//     return result
// }
// console.log(getMeScoresStudents(students))
const funcAddStatus = (el) => ({...el, isMarried: true})
// const addStatusStudents=(array)=>{
//    const result=[]
//     for (let i = 0; i < array.length; i++) {
//         result[i]={...students[i],isMarried:true}
//     }
//
//     return result
// }
// console.log(students)
// console.log(addStatusStudents(students))
const funcMupGlobal = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}
console.log(students)
console.log(funcMupGlobal(students, funcName))
console.log(students.map(funcName))
console.log(funcMupGlobal(students, funcScores))
console.log(students.map(funcScores))
console.log(funcMupGlobal(students, funcAddStatus))
console.log(students.map(funcAddStatus))


const funcFilterGlobal = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}
console.log(funcFilterGlobal(students, s => s.age >= 20))
console.log(funcFilterGlobal(students, s => s.scores <= 25))
console.log(students.filter(s => s.scores <= 25))

const findGlobalFunc = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            return array[i]
        }
    }
}
console.log(findGlobalFunc(students, s => s.name === 'Kok'))
console.log(students.find(s => s.name === 'Kok'))

console.log('--------------------------------------Push ')

const pushGlobalFunc = (array, el) => {

    array[array.length] = el

    return array.length
}
console.log(pushGlobalFunc(students,{name:'Gala'}))
console.log(students)
console.log(students.push({name:'Kesha'}))
console.log(students)
console.log('---------------------indexOf')

const numbers=[1,2,3,4,5]
const iOGlobalFunc=(array,num)=>{
    for (let i = 0; i < array.length; i++) {
        if(array[i]===num){
            return i
        }
    }
    return -1
}
console.log(iOGlobalFunc(numbers,3))