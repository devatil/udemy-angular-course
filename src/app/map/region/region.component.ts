import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../libs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  regionData;
  constructor(private mapService: MapService) {
    mapService.cityRegionSubject.subscribe((data) => {
      this.regionData = data;
    });
  }

  ngOnInit() {
    this.mapService.getCitiesRegion();
  }
}
