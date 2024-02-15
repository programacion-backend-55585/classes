
export default class UserRepository {
    constructor(userDao, ticketDao, mailModule) {
        this.userDao = userDao
        this.ticketDao = ticketDao
        this.mailModule = mailModule
    }

    get = async () => { return this.userDao.get() }
    getByID = async id => { return this.userDao.getByID() }
    create = async (data) => {
        return this.userDao.create(data)
    }

    addTicket = async (userID, ticketID) => {
        const user = await this.userDao.getByID(userID)
        if (!user) { throw new Error('User not found') }

        const ticket = await this.ticketDao.getByID(ticketID)
        if (!ticket) { throw new Error('Ticket not found') }

        user.tickets.push(ticketID)

        return this.userDao.update(user)
    }

    reminder = async (userID) => {
        const user = await this.userDao.getByID(userID)

        let html = `Mr ${user.name}, your tickets: <hr><ul>`
        for (const ticketID of user.tickets) {
            const ticket = await this.ticketDao.getByID(ticketID)
            html += `<li>${ticket.name}: ${ticket.description}</li>`
        }
        html += `</ul>`

        const result = this.mailModule.send(user, "Reminder Tickets", html)
        return result
    }

}