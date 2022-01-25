import { Component, OnInit, ViewChild } from '@angular/core';
import { Parallelogram } from './parallelogram';
import { Rectangle } from './rectangle';
import { Square } from './square';
import { Trapez } from './trapez';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css']
})
export class GeometryComponent implements OnInit {
  selectedShape: string = "Rectangle";
  value_a: number = 0;
  value_b: number = 0;
  value_h: number = 0;
  value_g: number = 0;
  area: number = 0;
  circumference: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  pick_shape_changed(object: any) {
    this.selectedShape = object.target.value;
    this.calculate();
  }

  calculate(): void {
    switch (this.selectedShape) {
      case 'Rectangle':
        this.area = new Rectangle(this.value_a, this.value_b).getArea();
        this.circumference = new Rectangle(this.value_a, this.value_b).getCircumference();
        break;
      case 'Square':
        this.area = new Square(this.value_a).getArea();
        this.circumference = new Square(this.value_a).getCircumference();
        break;
      case 'Trapez':
        this.area = new Trapez(this.value_a, this.value_b, this.value_h).getArea();
        this.circumference = new Trapez(this.value_a, this.value_b, this.value_h).getCircumference();
        break;
      case 'Parallelogram':
        this.area = new Parallelogram(this.value_g, this.value_h).getArea();
        this.circumference = new Parallelogram(this.value_g, this.value_h).getCircumference();
        break;
    }
  }
}
