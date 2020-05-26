import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  @Input() museumCoordinates: number[];
  @Input() museumName: string;
  @Input() museumAddress: string;

  private map: any;

  constructor(private dataService: DataServiceService) { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.museumCoordinates,
      zoom: 13
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    L.marker(this.museumCoordinates).addTo(this.map)
      .bindPopup('<h5><b>' + this.museumName + '</b></h5><br><h6><i>' + this.museumAddress + '</i></h6>')
      .openPopup();
  }

}
