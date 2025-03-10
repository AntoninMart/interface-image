import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-pdf',
  standalone: true,
  imports: [CardModule, TableModule, ButtonModule, ToolbarModule],
  templateUrl: './crud-pdf.component.html',
  styleUrl: './crud-pdf.component.scss'
})
export class CrudPdfComponent implements OnInit {

  dossier: {
    id: number,
    nomDossier: string,
    nomAfficher: string,
    images: string[]
  }[]

  constructor(private router: Router) {}

  ngOnInit() {
    this.dossier = [
      {
        "id": 1,
        "nomAfficher": "P5S1",
        "nomDossier": "semaine 1",
        "images": [
          "ja.png",
          "na.png",
          "jo.png",
          "no.png",
          "je.png",
          "ne.png",
          "ju.png",
          "nu.png",
          "ji.png",
          "ni.png",
          "jé.png",
          "né.png",
          "jin.png",
          "nin.png",
          "jou.png",
          "nou.png",
          "non.png",
          "nu.png"
        ]
      },
      {
        "id": 2,
        "nomAfficher": "P5S2",
        "nomDossier": "semaine 2",
        "images": [
          "pa.png",
          "za.png",
          "po.png",
          "zo.png",
          "pe.png",
          "ze.png",
          "pu.png",
          "zu.png",
          "pi.png",
          "zi.png",
          "pé.png",
          "zé.png",
          "pin.png",
          "zin.png",
          "pou.png",
          "zou.png",
          "pon.png",
          "zon.png",
          "pan.png",
          "zan.png"
        ]
      },
      {
        "id": 3,
        "nomAfficher": "P5S3",
        "nomDossier": "semaine 3",
        "images": [
          "ba.png",
          "ca.png",
          "ta.png",
          "bo.png",
          "co.png",
          "to.png",
          "be.png",
          "te.png",
          "bu.png",
          "tu.png",
          "cu.png",
          "bi.png",
          "ti.png",
          "bé.png",
          "té.png",
          "bin.png",
          "tin.png",
          "bou.png",
          "tou.png",
          "cou.png",
          "bon.png",
          "ton.png",
          "con.png",
          "ban.png",
          "can.png",
          "tan.png"
        ]
      },
      {
        "id": 4,
        "nomAfficher": "P5S4",
        "nomDossier": "semaine 4",
        "images": [
          "da.png",
          "ga.png",
          "do.png",
          "go.png",
          "de.png",
          "du.png",
          "gu.png",
          "di.png",
          "dé.png",
          "din.png",
          "dou.png",
          "gou.png",
          "don.png",
          "gon.png",
          "dan.png",
          "gan.png",
          "doi.png"
        ]
      },
      {
        "id": 5,
        "nomAfficher": "P4S1",
        "nomDossier": "semaine 5",
        "images": [
          "ja.jpg",
          "je.jpg",
          "ji.jpg",
          "jin.jpg",
          "jo.jpg",
          "jon.jpg",
          "jou.jpg",
          "ju.jpg",
          "jé.jpg",
          "na.jpg",
          "ne.jpg",
          "ni.jpg",
          "nin.jpg",
          "no.jpg",
          "non.jpg",
          "nou.jpg",
          "nu.jpg",
          "né.jpg",
          "pa.jpg",
          "pe.jpg",
          "pi.jpg",
          "pin.jpg",
          "po.jpg",
          "pon.jpg",
          "pou.jpg",
          "pu.jpg",
          "pé.jpg",
          "za.jpg",
          "ze.jpg",
          "zi.jpg",
          "zin.jpg",
          "zo.jpg",
          "zon.jpg",
          "zou.jpg",
          "zu.jpg",
          "zé.jpg"
         ]
      },
      {
        "id": 6,
        "nomAfficher": "P4S3",
        "nomDossier": "semaine 6",
        "images": [
          "ba.jpg",
          "ban.jpg",
          "be.jpg",
          "bi.jpg",
          "bin.jpg",
          "bo.jpg",
          "bon.jpg",
          "bou.jpg",
          "bu.jpg",
          "bé.jpg",
          "ca.jpg",
          "can.jpg",
          "co.jpg",
          "conn.jpg",
          "cou.jpg",
          "cu.jpg",
          "ta.jpg",
          "tan.jpg",
          "te.jpg",
          "ti.jpg",
          "tin.jpg",
          "to.jpg",
          "ton.jpg",
          "tou.jpg",
          "tu.jpg",
          "té.jpg"
        ]
      },
      {
        "id": 8,
        "nomAfficher": "P4S4",
        "nomDossier": "semaine 8",
        "images": [
          "da.jpg",
          "dan.jpg",
          "de.jpg",
          "di.jpg",
          "din.jpg",
          "do.jpg",
          "doi.jpg",
          "don.jpg",
          "dou.jpg",
          "du.jpg",
          "dé.jpg",
          "ga.jpg",
          "gan.jpg",
          "go.jpg",
          "gon.jpg",
          "gou.jpg",
          "gu.jpg"
        ]
      },         
      {
        "id": 7,
        "nomAfficher": "P4S6",
        "nomDossier": "semaine 7",
        "images": [
          "wa.jpg",
          "wan.jpg",
          "we.jpg",
          "wi.jpg",
          "win.jpg",
          "wo.jpg",
          "woi.jpg",
          "won.jpg",
          "wou.jpg",
          "wu.jpg",
          "wé.jpg",
          "xa.jpg",
          "xan.jpg",
          "xe.jpg",
          "xi.jpg",
          "xin.jpg",
          "xo.jpg",
          "xoi.jpg",
          "xon.jpg",
          "xou.jpg",
          "xu.jpg",
          "xé.jpg"
        ]
      }
    ]
  }

  playDossier(id: number){
    const selectedDossier = this.dossier.find(d => d.id === id);
    this.router.navigate(['/play'], { state: { data: selectedDossier } });
  }
}
