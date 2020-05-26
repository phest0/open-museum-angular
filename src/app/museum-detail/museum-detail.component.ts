import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
import { Museum } from '../models/museum/museum';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  museum: Museum;

  constructor(private dataService: DataServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const museumId: string = this.route.snapshot.params['museumId'];
    this.dataService.fetchMuseumById(museumId)
      .subscribe(
        res => {
          console.log(res);
          this.museum = res;
        },
        error => {
          console.log(error);
        }
      );
  }
}