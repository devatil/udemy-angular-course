import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

interface city {
  id: number;
  name: string;
  plaka: number;
  region: string;
}
@Injectable({
  providedIn: 'root',
})
export class MapService {
  cities = [
    {
      id: 1,
      name: 'Antalya',
      plaka: 7,
      region: 'Akdeniz',
    },
    {
      id: 2,
      name: 'Istanbul',
      plaka: 34,
      region: 'Marmara',
    },
    {
      id: 3,
      name: 'Izmir',
      plaka: 35,
      region: 'Ege',
    },
    {
      id: 4,
      name: 'Malatya',
      plaka: 44,
      region: 'Dogu Anadolu',
    },
    {
      id: 5,
      name: 'Kocaeli',
      plaka: 41,
      region: 'Marmara',
    },
    {
      id: 6,
      name: 'Bursa',
      plaka: 16,
      region: 'Marmara',
    },
  ];
  constructor() {}

  public cityNameSubject = new Subject<any>();
  public cityPlakaSubject = new Subject<any>();
  public cityRegionSubject = new Subject<any>();

  private citynamaDataSubject$: BehaviorSubject<any> = new BehaviorSubject([]);
  cityNameDataSubject = this.citynamaDataSubject$.asObservable();

  getCitiesName() {
    const data = this.cities.map((elem) => ({
      id: elem.id,
      name: elem.name,
    }));

    this.citynamaDataSubject$.next(data);
  }
  getCitiesPlaka() {
    const data = this.cities.map((elem) => ({
      id: elem.id,
      name: elem.name,
      plaka: elem.plaka,
    }));
    this.cityPlakaSubject.next(data);
  }
  getCitiesRegion() {
    const data = this.cities.map((elem) => ({
      id: elem.id,
      name: elem.name,
      region: elem.region,
    }));
    this.cityRegionSubject.next(data);
  }

  save(value: city) {
    const index = this.cities.findIndex((el) => el.id === value.id);

    if (index > -1) {
      this.cities[index] = value;
    } else {
      this.cities.push(value);
    }

    this.getCitiesName();
    this.getCitiesPlaka();
    this.getCitiesRegion();
  }
}
