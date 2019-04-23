export class Environment {
    baseUrl: string
    locale: string
    apikey: string
    
    constructor() {
        this.baseUrl = process.env["BASE_URL"]!
        this.locale = process.env["LOCALE"]!
        this.apikey = process.env["APIKEY"]!
    }
}