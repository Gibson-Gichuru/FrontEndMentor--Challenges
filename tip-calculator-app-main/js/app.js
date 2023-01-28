// get DOM Elements

// input elements
const selectedTip = document.querySelectorAll("#selectTip");
const custopTip = document.getElementById("customTip");
const bill = document.getElementById("bill")
const people = document.getElementById("people")
const resetBtn = document.getElementById("resetBtn");

// output elements

const tipPerPerson = document.getElementById("tipPerPerson");
const totalPerPerson = document.getElementById("totalPerPerson");

const error = document.querySelector(".error");

let totalBill = 0
let selectedTipValue = 0
let numberOfPersons = 0


document.addEventListener("DOMContentLoaded", ()=>reset())

bill.addEventListener("keyup", (event) => {

    if (event.target.value === "") {
        return
    }

    totalBill = parseInt(event.target.value)
    let tipTotal = calculateTotalTipPerPerson()
    let billTotal = calculateTotalBillPerPerson(tipTotal)

    displayValues(billTotal, tipTotal)

})

people.addEventListener("keyup", (event) => {

    if (event.target.value === "") {
        return
    }

    numberOfPersons = parseInt(event.target.value)
    let tipTotal = calculateTotalTipPerPerson()
    let billTotal = calculateTotalBillPerPerson(tipTotal)

    displayValues(billTotal, tipTotal)
})

selectedTip.forEach(tip => {
    tip.addEventListener('click', (event) => {
        selectedTipValue = parseInt(event.target.value)
        let tipTotal = calculateTotalTipPerPerson()
        let billTotal = calculateTotalBillPerPerson(tipTotal)
        displayValues(billTotal, tipTotal)
        custopTip.value = ""
    })
})


custopTip.addEventListener("keyup", (event) => {
    if (event.target.value === "") {

        return
    }

    selectedTipValue = parseInt(event.target.value)
    let tipTotal = calculateTotalTipPerPerson()
    let billTotal = calculateTotalBillPerPerson(tipTotal)
    displayValues(billTotal, tipTotal)
})

resetBtn.addEventListener("click", ()=>reset())

function calculateTotalBillPerPerson(tip) {

    if (numberOfPersons === 0) {
        error.textContent = "can't be zero"
        return 0
    }
    error.textContent = ""
    return (totalBill / numberOfPersons) + tip
}

function calculateTotalTipPerPerson() {

    let tip = totalBill * (selectedTipValue / 100)

    if (numberOfPersons === 0) {
        error.textContent = "can't be zero"
        return 0
    }

    let personTip = tip / numberOfPersons
    error.textContent = ""
    return personTip
}

function displayValues(billTotal, tipTotal) {


    tipPerPerson.textContent = "$ " + tipTotal

    totalPerPerson.textContent = "$ " + billTotal

}


function reset() {
    displayValues(0, 0)
    custopTip.value = ""
    let totalBill = 0
    let selectedTipValue = 0
    let numberOfPersons = 0
    bill.value = ""
    people.value = ""
}