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
const funcName= (el)=>el.name
// const getMeNamesStudents =(array)=>{
//     const result=[]
//     for (let i = 0; i < array.length; i++) {
//         result[i]=array[i].name
//     }
//     return result
// }
// console.log(getMeNamesStudents(students))
const funcScores=(el)=>el.scores
// const getMeScoresStudents=(array)=>{
//
//     const result=[]
//     for (let i = 0; i < array.length; i++) {
//         result[i]=array[i].scores
//     }
//     return result
// }
// console.log(getMeScoresStudents(students))
const funcAddStatus=(el)=>({...el,isMarried:true})
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
const funcGlobal=(array,func)=>{
    const result=[]
  for (let i = 0; i < array.length; i++) {
        result[i]=func(array[i])
     }
     return result
}
console.log(students)
console.log(funcGlobal(students,funcName))
console.log(students.map(funcName))
console.log(funcGlobal(students, funcScores))
console.log(students.map(funcScores))
console.log(funcGlobal(students, funcAddStatus))
console.log(students.map(funcAddStatus))
