export class Product {

    public name: string;
    public tag: string;
    public url: string;
    public color: string;
    public image: string;

    constructor(

        name: string,
        tag: string,
        url: string,
        color: string,
        image: string,

    ) {
        this.name = name;
        this.tag = tag
        this.url = url;
        this.color = color;
        this.image = image;
    }
}