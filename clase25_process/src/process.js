
console.log(process.cwd())
console.log(process.pid)

console.log(process.argv.slice(2))

const token = process.argv.slice(2)[1]
console.log({ token })