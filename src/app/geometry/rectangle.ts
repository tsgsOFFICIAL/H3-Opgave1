import { Square } from "./square";

export class Rectangle extends Square {
    b: number;

    constructor(a: number, b: number) {
        super(a);
        this.b = b;
    }

    override getArea(): number {
        return this.a * this.b;
    }

    override getCircumference(): number {
        return (this.a * 2) + (this.b * 2);
    }
}
