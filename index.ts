let age = 39
let firstName: string ="Jonathan"
let isTeacking: boolean = false

const classes: string[] = ['javascript', 'typescript']
const NumberOfStudents: number[] = [23, 14]
NumberOfStudents.push(age);
console.log(NumberOfStudents)


console.log("You are how old", age)

enum TaxForms {
    incomeTax="Tax form 1099",
    ChildCare=244,
    BitcointLoss=420,
    RichDude=378,
}


const WhichTaxForm = TaxForms.BitcointLoss
// console.log("use tax from: ",  WhichTaxForm)

let postalcode:number | string = 33317
postalcode = 33351
// console.log(postalcode)


function findIndex(index: number, arr: number[]): number {
    return arr[index]
}


function log(msg: string| number): void {
    console.log(msg)
}

let finalNumber = findIndex(1, NumberOfStudents)
log("yep! is returning something")

log(findIndex(1, NumberOfStudents))


const complexObject : any = {name: "rafael", height: "yes please", age: 49}


interface human {
    name: string,
    height: string,
}

interface Teacher extends human {
    age: number
    weight?: string
}

const complexObject2 : Teacher = {name: "rafael", height: "yes please", age: 49, weight: "200"}

log(complexObject)

function displayteacher(teacher: Teacher) : string {
    return `this teacher is ${teacher.age} old`
}

console.log(displayteacher(complexObject2))