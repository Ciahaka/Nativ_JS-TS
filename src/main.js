const todoListID_1 = 'iiiii'
const todoListID_2 = 'sssss'


const todoLists = [
    {
        id: todoListID_1,
        title: 'Ku-Ku',
        filter: 'all',
        // tasks: [
        //     {id: 12, title: 'Hop', isDone: false},
        //     {id: 13, title: 'Top', isDone: false},
        //     {id: 14, title: 'Test', isDone: false},
        // ]
    },
    {
        id: todoListID_2,
        title: 'Kry-Kry',
        filter: 'all',
        // tasks: [
        //     {id: 22, title: 'NNN', isDone: false},
        //     {id: 23, title: 'Unit', isDone: false},
        //     {id: 24, title: 'POTU', isDone: false},
        // ]
    },
]
const tasks = {
    [todoListID_1]: [
        {id: 12, title: 'Hop', isDone: false},
        {id: 13, title: 'Top', isDone: false},
        {id: 14, title: 'Test', isDone: false},
    ],
    [todoListID_2]: [
        {id: 22, title: 'NNN', isDone: false},
        {id: 23, title: 'Unit', isDone: false},
        {id: 24, title: 'POTU', isDone: false},
    ],
}

console.log(tasks[todoListID_1].find(t => t.id === 12).title) //нашли элемент массива
console.log([...tasks[todoListID_2], {id: 25, title: 'rrrrr', isDone: false}])
console.log(tasks[todoListID_1].map(t => t.title))

//reduce  приводит массив к одному значению
const nums = [10, 20, 30] //
console.log(nums.reduce((acc, el) => acc + el, 0))

console.log(nums.reduce((acc, el) => acc > el ? acc : el))

let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {   id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];
//превратили массив в объект, быстрее искать в объекте по известному id
const sts ={
    '1':{
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
}

console.log(students.reduce((acc,el)=>{
    acc[el.id]={...el}
    delete acc[el.id].id
    return acc
},{}))

//посчитаем сумму счёта всех студентов
console.log(students.reduce((acc,el)=>acc+el.scores,0))