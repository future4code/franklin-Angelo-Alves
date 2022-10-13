export class Product {
    private id: number;
    public name: string;
    public tag: string;
    public url: string;
    constructor(
        id: number,
        name: string,
        tag: string,
        url: string
    ) {
        this.id = id
        this.name = name
        this.tag = tag
        this.url = url;
    }
    public getTag = () => {
        return this.tag
    }

}