
export default class Contacts {
    constructor() {
        this.db = []
    }

    get = async () => {
        return this.db
    }

    insert = async (data) => {
        
        data.id = this.db.length + 1
        this.db.push(data)

        return data
    }
}