import { Component, OnInit } from '@angular/core';

import { DataServiceService } from '../services/data-service.service';
import { Museum } from '../models/museum/museum';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  public museums: Museum[];

  constructor(private dataService: DataServiceService) {

  }

  ngOnInit() {

    this.dataService.fetchMuseums()
      .subscribe(
        res => {
          console.log(res);
          this.museums = res;
        },
        error => {
          console.log(error);
        });
  }

}
