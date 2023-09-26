function varScoping() {
    var x = 1

    if( true ) {
        var x = 2
        console.log(x)
    }

    console.log(x)
}

function letScoping() {
    let x = 1

    if( true ) {
        let x = 2
        console.log(x)
    }

    console.log(x)
}


varScoping()
console.log('////')
letScoping()