import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-view-agency',
  templateUrl: './view-agency.component.html',
  styleUrls: ['./view-agency.component.css'],
})
export class ViewAgencyComponent implements OnInit {
  // public agencyId: string;
  public agency: any;
  constructor(route: ActivatedRoute, util: UtilService, data: DataService) {
    const agencyId = util.getIdFromRoute(route);

    // this.agency = data.agencies.find(function byAgencyId(a) {
    //   return a.id === agencyId;
    // });

    // const byAgencyId = (agency: any) => agency.id === agencyId;
    // this.agency = data.agencies.find(byAgencyId);

    this.agency = data.agencies.find((a) => a.id === agencyId);

    // data.agencies.forEach((a) => console.log('agency:', a));
  }

  ngOnInit(): void {}
}
