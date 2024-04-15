import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

interface Dossier {
  id: number;
  nomDossier: string;
  images: string[];
}

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CardModule, ToolbarModule, ButtonModule],
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  data: Dossier | null = null;
  imageShow: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.data = history.state.data as Dossier;
    this.randomImage()
  }

  randomIntFromInterval(min: number, max: number): number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  randomImage(){
    const randomInt = this.randomIntFromInterval(0, this.data.images.length - 1);
    this.imageShow = `assets/assemblons_les_sons_P4/${this.data.nomDossier}/${this.data.images[randomInt]}`
  }
}
