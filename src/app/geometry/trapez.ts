import { Square } from "./square";

export class Trapez extends Square {
    b: number;
    h: number;

    constructor(a: number, b: number, h: number) {
        super(a);
        this.b = b;
        this.h = h;
    }

    override getArea(): number {
        return 0.5 * this.h * (this.a + this.b);
    }

    override getCircumference(): number {
        return 0.00;
    }
}
