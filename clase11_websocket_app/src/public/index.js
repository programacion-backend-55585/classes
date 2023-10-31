console.log('Init my chat')
let socket

let user = sessionStorage.getItem('user') || ''

if(user) {
    document.querySelector('#username').innerHTML = user + ': '
    initIO()
} else {
    Swal.fire({
        title: 'Auth',
        input: 'text',
        text: 'Set username for the Lily\'s chat',
        inputValidator: value => {
            return !value.trim() && 'Please. Write an username'
        },
        allowOutsideClick: false
    }).then( result => {
        user = result.value
        sessionStorage.setItem('user', user)
        document.querySelector('#username').innerHTML = user + ': '
        initIO()
    })
}

const input = document.querySelector('#chatinput')
input.addEventListener('keyup', event => {
    if(event.key === 'Enter') sendMessage(event.currentTarget.value)
})
document.querySelector('#send').addEventListener('click', event => sendMessage(input.value) )

function sendMessage(message) {
    if(message.trim().length > 0) {
        socket.emit('message', { user, message })
        input.value = ''
    }
}

function initIO() {
    socket = io()

    socket.on('logs', messages => {
        const box = document.querySelector('#chatbox')
        let html = ''
    
        messages.reverse().forEach( message => {
            html += `<p><i>${message.user}</i>: ${message.message}</p>`
        })
    
        box.innerHTML = html
    })
}
