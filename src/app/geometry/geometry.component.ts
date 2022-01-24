import { Component, OnInit } from '@angular/core';
import { Square } from './square';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css']
})
export class GeometryComponent implements OnInit {
  selectedShape: string = "Rectangle";

  constructor() { }

  ngOnInit(): void {
  }

  pick_shape_changed(object: any) {
    this.selectedShape = object.target.value;
    this.calculate();
  }

  calculate(): void {

  }
}
