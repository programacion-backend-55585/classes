
const impuestos = {
    impuestoIVA: 19,
    impuestoCarro: 40,
    impuestoResidencia: 10
}

// Entries
console.log('ENTRIES')
const entriesAndValues = Object.entries(impuestos)
console.log(entriesAndValues) // Array de Arrays
console.log(entriesAndValues[1]) // Un Array
console.log(entriesAndValues[1][0]) // El valor del array anterior

// Keys
console.log('KEYS')
const entries = Object.keys(impuestos)
console.log(entries)

// Values
console.log('Values')
const values = Object.values(impuestos)
console.log(values)