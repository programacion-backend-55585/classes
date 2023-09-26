
class TicketManager {
    
    #precioBaseDeGanancia

    constructor() {
        this.events = []
        this.#precioBaseDeGanancia = 0.15
    }

    getNextID = () => {
        const count = this.events.length
        if(count === 0) return 1

        // Devuelve el ultimo evento del array
        // count = 2 (Tengo dos eventos agreagos)
        // El ultuimo elemento es la pos = 1 [0, 1]
        const position = count - 1
        const lastEvent = this.events[position] 

        // Le suma 1 al id del ultimo evento
        return lastEvent.id + 1
    }

    getEvents = () => { return this.events }
    addEvent = (name, location, price, capacity, date) => {
        const id = this.getNextID()
        
        const event = {
            id,
            name,
            location,
            price: price * (1 + this.#precioBaseDeGanancia),
            capacity: capacity || 50,
            date: date || new Date().toLocaleDateString(),
            participantes: []
        }

        this.events.push(event)
    }

}

const ticketManager = new TicketManager()
ticketManager.addEvent('AC DC', 'Buenos Aires', 500, 0, '')
ticketManager.addEvent('Afterlife', 'Bogota DC', 2000, 1000, '')
console.log(ticketManager.getEvents())

