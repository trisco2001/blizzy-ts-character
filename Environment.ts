export class Environment {
    baseUrl: string
    
    constructor() {
        this.baseUrl = process.env["BASEURL"]!
    }
}