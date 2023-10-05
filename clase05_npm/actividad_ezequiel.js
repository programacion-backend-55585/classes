const numbers = {} 
for (let i = 0; i < 10000; i++) { 
    const number = Math.floor(Math.random() * (21 - 1) + 1)   
    numbers[number] >= 1 ? numbers[number] += 1 : numbers[number] = 1 
} 
console.log(numbers)