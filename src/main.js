console.log('lesson 4')

const todoListID_1 = 1;
const todoListID_2 = 2;

const todoLists = [
    {
        id: 1,
        title: 'What to learn',
        filter: 'all',
        tasks: [
            {id: 11, title: 'JS', isDone: true},
            {id: 144, title: 'CSS', isDone: true},
            {id: 167, title: 'React', isDone: false},
        ]
    },
    {
        id: 2,
        title: 'What to eat',
        filter: 'active',
        tasks: [
            {id: 21, title: 'Milk', isDone: true},
            {id: 244, title: 'Cheese', isDone: true},
            {id: 267, title: 'Ice-cream', isDone: false},
        ]
    }
]


const todoListsObj = {
    '1': {
        id: 1,
        title: 'What to learn',
        filter: 'all',
        tasks: [
            {id: 11, title: 'JS', isDone: true},
            {id: 144, title: 'CSS', isDone: true},
            {id: 167, title: 'React', isDone: false},
        ]
    },
    '2': {
        id: 2,
        title: 'What to eat',
        filter: 'active',
        tasks: [
            {id: 21, title: 'Milk', isDone: true},
            {id: 244, title: 'Cheese', isDone: true},
            {id: 267, title: 'Ice-cream', isDone: false},
        ]
    }
}


const tasks = {
    // [todoLists[0].id]: [
    [todoListID_1]: [
        {id: 11, title: 'JS', isDone: true},
        {id: 144, title: 'CSS', isDone: true},
        {id: 167, title: 'React', isDone: false}
    ],
    // [todoLists[1].id]: [
    [todoListID_2]: [
        {id: 21, title: 'Milk', isDone: true},
        {id: 244, title: 'Cheese', isDone: true},
        {id: 267, title: 'Ice-cream', isDone: false}
    ]
}


// console.log(tasks[todoListID_1][1].title)

// reduce

const nums = [10, 30, 20, 120, 40, 121, 10, 20, 34, 56] // sum - ?
console.log('1: ' + nums.reduce((acc, el) => {
    // acc = acc + el
    // return acc
    return acc += el
}, 0))

console.log('1 short: ' + nums.reduce((acc, el) => acc + el, 0))


console.log('2: ' + nums.reduce((acc, el) => {
    if (acc > el) {
        return acc
    } else {
        return el
    }
}))

console.log('2 short: ' + nums.reduce((acc, el) => acc > el ? acc : el))


let students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: 'John',
        age: 23,
        isMarried: false,
        scores: 100
    }
];

console.log('the best student ', students.reduce((acc, el) => acc.scores > el.scores ? acc : el))
console.log('sum of balls = ', students.reduce((acc, el) => acc + el.scores, 0))

console.log(students.map(st => ({...st, scores: st.scores + 10})))
console.log(students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 10})
    return acc
}, []))


const stExample = {
    1: {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    }
}

const st = students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})

console.log(st)