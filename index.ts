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

let finalNumber = findIndex(1, NumberOfStudents)
console.log(finalNumber + 1)

console.log(findIndex(1, NumberOfStudents))


