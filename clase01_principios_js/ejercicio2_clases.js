class Contador {
    constructor(responsible) {
        this.responsible = responsible
        this.countLocal = 0
    }
    static countGlobal = 0

    getResponsable = () => { return this.responsible }
    getCountLocal = () => { return this.countLocal }
    getCountGlobal = () => { return Contador.countGlobal }

    count() {
        this.countLocal++
        Contador.countGlobal++
    }
}

const contador1 = new Contador('Simon')
const contador2 = new Contador('Marco Leskovar')
const contador3 = new Contador('Andrea Berardi-628134')

contador1.count()

contador2.count()
contador2.count()
contador2.count()

contador3.count()
contador3.count()

console.log(`${contador1.getResponsable()}: ${contador1.getCountLocal()}`)
console.log(`${contador2.getResponsable()}: ${contador2.getCountLocal()}`)
console.log(`${contador3.getResponsable()}: ${contador3.getCountLocal()}`)

console.log(`El global es ${contador1.getCountGlobal()}`)
