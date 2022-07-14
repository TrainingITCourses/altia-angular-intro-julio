import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-view-agency',
  templateUrl: './view-agency.component.html',
  styleUrls: ['./view-agency.component.css'],
})
export class ViewAgencyComponent implements OnInit {
  public agencyId: string;

  constructor(route: ActivatedRoute, util: UtilService) {
    this.agencyId = util.getIdFromRoute(route);
  }

  ngOnInit(): void {}
}
