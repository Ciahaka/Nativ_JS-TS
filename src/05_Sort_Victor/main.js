const strings = ['bob', 'alex', 'donald', 'Bred', 'Игорь', 'юрий', 25, 'ёжик', 1, '1', 1]
console.log(strings.sort())
const sortStrings = (strings.sort() === strings)
console.log(sortStrings)
const sortStrings_1 = strings.sort().reverse()
console.log(sortStrings_1)

const numbers = [100, 9, 66, 1100, 1, 1000]
const numbers_1 = [2, 15, 1000, 100, 1]
console.log(numbers.sort())
console.log(numbers_1.sort())


const compareFn = (a, b) => {
    if (a <= b) {
        return -5
    }
    return 25
}
const shortCompareFn = (a, b) => a - b
const shortCompareFnReverse = (a, b) => b - a

console.log(numbers.sort(compareFn))
console.log(numbers.sort(compareFn).reverse())
console.log(numbers.sort(shortCompareFn))
console.log(numbers.sort(shortCompareFnReverse))


const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: 'Alex',
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Helge',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: 'alex',
        age: 23,
        isMarried: true,
        scores: 89
    },
];
//a и b - объекты
// console.log(students.sort((a,b)=>b.scores - a.scores))
// console.log(students.sort((a,b)=>a.name.localeCompare(b.name)))
//вместо
console.log(students.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))
const sortStudents = students.sort((a, b) => a.scores - b.scores)
const sortStudents_1 = students.sort((a, b) => b.scores - a.scores)
console.log(sortStudents)
console.log(sortStudents_1)


//bubble sort
const nums = [54, 43, 28, 90, 67, 1, 19]

for (let j = 0; j < nums.length - 1; j++) {      //цикл в цикле, чтобы не повторять множество раз
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {    //счетчик минус -j оптимизирует сортировку так, что отсортированные элемнты больше не трогает
        if (nums[i] > [i + 1]) {
            isSorted = false;   //при такой записи не забыть про ; .
            // const temp = nums[i]   //-пустой стакан
            // nums[1] = nums[i + 1]
            // nums[i + 1] = temp
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]  //запись короткая Производительность ниже чем у цикла for
        }
    }
    if (isSorted) break
}
console.log(nums)
//
