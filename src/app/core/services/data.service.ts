import { Injectable } from '@angular/core';
import { AgencyInterface } from '../models/agency.interface';
import { RangeEnum } from '../models/range.enum';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public agencies: AgencyInterface[] = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: RangeEnum.Interplanetary,
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: RangeEnum.Orbital,
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: RangeEnum.Orbital,
      status: 'Pending',
    },
  ];
  constructor() {
    this.agencies.forEach((a) => console.log(a.status));
  }
}
