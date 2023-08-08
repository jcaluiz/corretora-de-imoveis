export default class RequestsProperty {
    private url: string;

    constructor() {
        this.url = 'http://localhost:3006';
    }

    public async publishProperty(property: Object) {
        console.log(`${this.url}/property`);
        const response = await fetch(`${this.url}/property`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(property),
        });
        const postProperty = await response.json();
        return postProperty;
    }

    public async getAllProperty() {
        console.log(`${this.url}/property`);
        const response = await fetch(`${this.url}/property`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const getProperty = await response.json();
        return getProperty;
    }

    public async propertyUpload(file: FormData) {
        const response = await fetch(`${this.url}/property/upload`, {
            method: 'POST',
            body: file,
        });
        const postProperty = await response.json();
        return postProperty;
    }

    public async getPropertyById(id: string) {
        console.log(`${this.url}/property`);
        const response = await fetch(`${this.url}/property/find-by-id?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const getProperty = await response.json();
        return getProperty;
    }
}