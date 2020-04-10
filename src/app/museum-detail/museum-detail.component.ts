import { Component, OnInit } from '@angular/core';
import { MuseumListService } from "../services/museumList.service";

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  museumTitle:string = "titre musée";
  adress:string = "adress";
  ville:string = "ville";
  codePostal:string = "code postal";
  tel:string = "tel";
  webPage:string = "page web";
  ouverturePeriode:string = "periode ouverture";

  constructor(private museumListService: MuseumListService) { }

  ngOnInit() {
  }

}
