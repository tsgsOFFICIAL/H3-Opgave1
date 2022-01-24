import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pal',
  templateUrl: './my-pal.component.html',
  styleUrls: ['./my-pal.component.css']
})
export class MyPalComponent implements OnInit {
  name: string = "Joachim";
  description: string = "Gorillaer (Gorilla) er en slægt af store menneskeaber, og samtidigt de største af primaterne. De er planteædere, og bebor skovene i det centrale Afrika. Gorillaer er truet af udryddelse og er mål for krybskytteri. Hannerne bliver mellem 1,65 m og 1,75 m høje og vejer mellem 140 kg og 165 kg. Hunnerne vejer omkring det halve af hannerne. Joachim er en gorilla.";
  imgSrc: string = "assets/img/joachim.jpg";
  
  ImageHover() {
    alert(`Det her er Joachim`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
