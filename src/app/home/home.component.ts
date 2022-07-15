import { Component, OnInit } from '@angular/core';
import { delay, map, Observable, tap } from 'rxjs';
import { AgencyType } from '../core/models/agency.type';
import { ApiService } from '../core/services/api.service';
import { DataService } from '../core/services/data.service';
import {
  AgenciesViewType,
  AgencyItemType,
} from './agencies/agencies.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // public agencies: AgencyType[] = [];
  // public agencies$: Observable<AgencyType[]>;
  public agenciesView$: Observable<AgenciesViewType>;
  public isReloadingAgencies = false;
  public isReloadingTrips = false;

  constructor(data: DataService, api: ApiService) {
    // this.agencies = data.agencies;
    // api.getAgencies().subscribe((agencies) => (this.agencies = agencies));
    // this.agencies$ = api.getAgencies();
    this.isReloadingAgencies = true;
    this.agenciesView$ = api.getAgencies().pipe(
      tap((agencies: AgencyType[]) => console.log('FROM API:', agencies)),
      delay(3000),
      map((agencies: AgencyType[]) => {
        const agenciesView: AgenciesViewType = {
          agenciesCount: agencies.length,
          agenciesList: agencies.map((agency: AgencyType) => {
            const agencyItem: AgencyItemType = {
              name: agency.name,
              range: agency.range || 'Orbital',
              status: agency.status.toLocaleLowerCase(),
            };
            return agencyItem;
          }),
        };
        return agenciesView;
      }),
      tap((agenciesView: AgenciesViewType) => {
        console.log('TO VIEW', agenciesView);
        this.isReloadingAgencies = false;
      })
    );
  }

  public onReload(dataName: string) {
    if (dataName === 'Agencies') {
      this.isReloadingAgencies = true;
      this.isReloadingTrips = false;
    } else {
      this.isReloadingTrips = true;
      this.isReloadingAgencies = false;
    }
    console.log('♻️ Reloading...' + dataName);
  }

  ngOnInit(): void {}
}
