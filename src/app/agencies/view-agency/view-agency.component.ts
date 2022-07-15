import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgencyType } from 'src/app/core/models/agency.type';
import { ApiService } from 'src/app/core/services/api.service';
import { DataService } from 'src/app/core/services/data.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-view-agency',
  templateUrl: './view-agency.component.html',
  styleUrls: ['./view-agency.component.css'],
})
export class ViewAgencyComponent implements OnInit {
  // public agencyId: string;

  public agency!: AgencyType;

  constructor(
    route: ActivatedRoute,
    util: UtilService,
    data: DataService,
    api: ApiService
  ) {
    const agencyId = util.getIdFromRoute(route);
    api.getAgencyById(agencyId).subscribe((agency) => (this.agency = agency));

    // this.agency = data.agencies.find(function byAgencyId(a) {
    //   return a.id === agencyId;
    // });
    // const byAgencyId = (agency: any) => agency.id === agencyId;
    // this.agency = data.agencies.find(byAgencyId);
    // this.agency = data.agencies.find((a) => a.id === agencyId);
    // data.agencies.forEach((a) => console.log('agency:', a));
  }

  ngOnInit(): void {}
}
