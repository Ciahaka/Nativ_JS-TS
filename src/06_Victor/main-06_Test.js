const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: 'Helen',
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: 'Ann',
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: 'Bob',
    age: 23,
    isMarried: false,
    friends: ['Alex', 'Nick', 'John'],
};

// https://www.dev-notes.ru/articles/deep-copying-using-structured-clone

//1. Поверхностная копия user


const copyUser = {...user}
console.log(copyUser === user)
console.log(copyUser.friends === user.friends)

//2. Полная (глубокая) копия user

const deepCopyUser = {
    ...user,
    friends: [...user.friends]
}
console.log(deepCopyUser === user)

// //3. Поверхностная копия students
const copyStudents = [...students];
console.log(copyStudents)
console.log('-------------------------------')
console.log(students.slice())
//
// //4*. Полная (глубокая) копия students
const deepCopyStudent = [
    ...students.map((el) => {
        return {...el}
    })
];
console.log(deepCopyStudent)
// //Далее все преобразования выполняем не модифицируя исходный массив students
//
// //5. Отсортируйте студентов по успеваемости (лучший идёт первым)
let sortByScores = deepCopyStudent.sort((a, b) => {
    return b.scores - a.scores
})
console.log('---------------------------')
console.log(sortByScores)
// //5a. Отсортируйте студентов по алфавиту
const sortByName = deepCopyStudent.sort((a, b) => a.name.localeCompare(b.name))
console.log('sortByNamesortByNamesortByNamesortByNamesortByName')
console.log(sortByName)

// //6. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter(el => el.scores >= 100)
console.log('bestStudentsbestStudentsbestStudentsbestStudentsbestStudentsbestStudents')
console.log(bestStudents)
//
// //6a.Сформируйте массив из трёх лучших студентов
const topStudents = bestStudents.splice(0, 3)
console.log('topStudentstopStudentstopStudentstopStudentstopStudentstopStudents')
console.log(topStudents)
//
//
// //6b. Объедините массивы deepCopyStudents и topStudents так,
// // чтоб сохранился порядок сортировки
const newDeepCopyStudents = [...topStudents, ...deepCopyStudent]
console.log('newDeepCopyStudentsnewDeepCopyStudentsnewDeepCopyStudentsnewDeepCopyStudents')
console.log(newDeepCopyStudents)
//
// //7. Сформируйте массив холостых студентов
const notMarriedStudents = students.filter((el) => el.isMarried !== true)
console.log('notMarriednotMarriednotMarriednotMarriednotMarriednotMarriednotMarried')
console.log(notMarriedStudents)
// //8. Сформируйте массив имён студентов
const studentsNames = students.map(el => el.name)
console.log('NamesNamesNamesNamesNamesNamesNamesNamesNamesNames')
console.log(studentsNames)
// //8a. Сформируйте строку из имён студентов, разделённых
// // - пробелом
// // - запятой
const nameWithSpace = studentsNames.join(' ')
const namesWithComma = studentsNames.join(',')
console.log('joinjoinjoinjoinjoinjoinjoinjoin')
console.log(nameWithSpace)
console.log(namesWithComma)
//
// //9. Добавьте всем студентам свойство "isStudent" со значением true
const trueStudents = students.map((el) => (el = {...el, isStudent: true}))
console.log('truetruetruetruetruetruetrue')
console.log(trueStudents)

// //10. Nick женился. Выполните преобразование массива students
let studentsWithMarriedNick = students.map(el => el.name === 'Nick' ? {...el, isMarried: true} : el)

console.log('NickNickNickNickNickNickNickNick')
console.log(studentsWithMarriedNick)
//
// //11. Найдите Студентку по имени Ann
const ann = students.find(el => el.name === 'Ann')
console.log('annannannannannannann')
console.log(ann)
console.log(students)
// //12. Найдите студента с самым высоким баллом
const bestStudent = students.reduce((acc, el) => acc.scores > el.scores ? acc : el)
console.log('reducereducereducereducereducereduce')
console.log(bestStudent)
console.log(students)
//
// //12a. Найдите 2 студента с самым высоким баллом
// let bestStudent1 = students[0];
// let bestStudent2 = students[1];


// //13. Найдите сумму баллов всех студентов
const scoresSum = students.reduce((acc, el) => acc + el.scores,0)
console.log('===========================================')
console.log(scoresSum)
// // 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
//
// // function addFriends(students) {
// //     const studentsNames = students.map(st => st.name)
// //     function getFriendsList(student){
// //         const friendsList = studentsNames.filter(name => student.name !== name)
// //         return friendsList
// //     }
// //     const studentsWithFriends = students.map(st => {
// //         return {...st, friends: getFriendsList(st)}
// //     })
// //     return studentsWithFriends
//
// // }
// const addFriends;
