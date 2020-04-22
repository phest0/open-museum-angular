import { Component, OnInit } from '@angular/core';
import { MuseumListService } from "../services/museumList.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  refMuseum: string;
  museumTitle: string;
  adress: string;
  ville: string;
  codePostal: string;
  tel: string;
  webPage: string;
  ouverturePeriode: string;
  fax: string;

  constructor(private museumListService: MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {
    const refMuseum = this.route.snapshot.params['refMuseum'];
    this.museumTitle = this.museumListService.getMuseumByRef_musee(refMuseum).nom_du_musee;
    this.adress = this.museumListService.getMuseumByRef_musee(refMuseum).adr;
    this.ville = this.museumListService.getMuseumByRef_musee(refMuseum).ville;
    this.codePostal = this.museumListService.getMuseumByRef_musee(refMuseum).cp;
    this.tel = this.museumListService.getMuseumByRef_musee(refMuseum).telephone;
    this.webPage = this.museumListService.getMuseumByRef_musee(refMuseum).sitweb;
    this.ouverturePeriode = this.museumListService.getMuseumByRef_musee(refMuseum).periode_ouverture;
    this.fax = this.museumListService.getMuseumByRef_musee(refMuseum).fax;
  }

}
