import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Museum } from '../models/museum/museum';

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})

export class SingleMuseumComponent implements OnInit {
  // variables
  @Input() museums: Museum;

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit() {
  }

}
