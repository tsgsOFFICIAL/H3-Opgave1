export class Square {
    a: number;
    
    constructor(a: number) {
        this.a = a;
    }

    getArea(): number {
        return this.a * this.a;
    }

    getCircumference(): number {
        return this.a * 4;
    }
}
