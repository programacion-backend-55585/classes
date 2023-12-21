
process.on('message', message => {
    let result = 0
    
    console.log('PID child: ', process.pid)

    for(let i = 0; i < 5e10; i++) {
        result += i
    }
    
    process.send(result)
})

