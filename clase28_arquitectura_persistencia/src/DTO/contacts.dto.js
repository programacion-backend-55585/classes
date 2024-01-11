
export default class ContactInsertDTO {

    constructor(contact) {
        this.name = contact?.name ?? ''
        this.age = contact?.age ?? 0

        this.active = contact?.active ?? true

    }

}