import { Square } from "./square";

export class Parallelogram extends Square {
    h: number;

    constructor(a: number, h: number) {
        super(a);
        this.h = h;
    }

    override getArea(): number {
        return this.a * this.h;
    }

    override getCircumference(): number {
        return (this.a * 2) + (this.h * 2);
    }
}
