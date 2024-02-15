import fs from 'fs'

class FileManager {

    constructor(path = 'db.json') {
        this.path = './' + path
    }

    write = list => {
        return fs.promises.writeFile(this.path, JSON.stringify((list)))
    }

    read = async() => {
        if(fs.existsSync(this.path)) {
            return fs.promises.readFile(this.path, 'utf-8')
                .then(str => JSON.parse(str))
                .catch(e => {
                    console.error(`Path not found. Return []`)
                    return []
                })
        }

        await this.write([])

        return []
    }

    get = async() => { return this.read() }
    getOneByParam = async(param, value) => {
        return (await this.read()).find(d => d[param] === value)
    }

    add = async (obj) => {
        const list = await this.read()
        obj._id = list.length + 1
        list.push(obj)
        await this.write(list)

        return obj
    }

    update = async(obj) => {
        const list = await this.read()
        const idx = list.findIndex(d => d._id === obj._id)
        if(idx < 0) throw new Error('Not found into File')

        list[idx] = obj
        await this.write(list)

        return obj
    }
}

export default FileManager