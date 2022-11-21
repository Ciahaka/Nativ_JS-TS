const todoListId_1 = '1'
const todoListId_2 = '2'

const todoLists = [
    {
        id: todoListId_1, //'1'
        title: 'What to learn',
        // tasks: [
        //     {id: '11', title: 'HTML'},
        //     {id: '12', title: 'JS'},
        //     {id: '13', title: 'CSS'},
        // ]
    },
    {
        id: todoListId_2, //'2'
        title: 'What to buy',
        // tasks: [
        //     {id: '14', title: 'Milk'},
        //     {id: '15', title: 'Beer'},
        //     {id: '16', title: 'Water'},
        // ]
    }
]
const tasks = {
    [todoListId_1]: [            //todoLists[0].id
        {id: '11', title: 'HTML'},
        {id: '12', title: 'JS'},
        {id: '13', title: 'CSS'},
    ],
    [todoListId_2]: [            //todoLists[1].id
        {id: '25', title: 'Milk'},
        {id: '26', title: 'Beer'},
        {id: '27', title: 'Water'},
    ],
    'user name': 'Bob'
}

const newTask = {
    id: '14', title: 'TS'
}
const copyTasks =  {...tasks,[todoListId_1]: [...tasks[todoListId_1],newTask]}
console.log(copyTasks)

const deleteTask = {...tasks,[todoListId_2]: tasks[todoListId_2].filter(el=> el.id !=='26')}
console.log(deleteTask)

//reduce
const nums=[342,467,222,8901]
const newNums=nums.reduce((acc,el)=>acc+el,0)
console.log(newNums)
const easyNums = [1,2,3,4,5]
const newEasyNums = easyNums.reduce((acc,el)=>acc+el,0)
console.log(newEasyNums)