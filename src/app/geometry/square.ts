export class Square {
    a: number;
    b: number;
    
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    getArea(): number {
        return this.a * this.a;
    }

    getCircumference(): number {
        return this.a * 4;
    }
}
