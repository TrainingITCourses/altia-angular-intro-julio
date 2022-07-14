import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public agencies;
  public isReloadingAgencies = false;
  public isReloadingTrips = false;

  constructor(data: DataService) {
    this.agencies = data.agencies;
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
