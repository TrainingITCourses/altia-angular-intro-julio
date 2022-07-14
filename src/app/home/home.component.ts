import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public agencies: any[] = [];
  public isReloadingAgencies = false;
  public isReloadingTrips = false;

  constructor(data: DataService, api: ApiService) {
    // this.agencies = data.agencies;
    api.getAgencies().subscribe((agencies) => (this.agencies = agencies));
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
