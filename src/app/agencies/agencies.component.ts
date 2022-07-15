import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyType } from '../core/models/agency.type';
import { ApiService } from '../core/services/api.service';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css'],
})
export class AgenciesComponent implements OnInit {
  public agencies: AgencyType[] = [];

  constructor(
    private router: Router,
    private data: DataService,
    private api: ApiService
  ) {
    // this.agencies = data.agencies;
    api.getAgencies().subscribe((agencies) => (this.agencies = agencies));
  }

  public onNewClick() {
    const newAgency: AgencyType = {
      id: 'altia',
      name: 'Altia',
      range: 'Orbital',
      status: 'Active',
    };
    this.api
      .postAgency(newAgency)
      .subscribe((res) => this.router.navigate(['']));

    // this.router.navigate(['agencies', 'new']);
    // this.data.agencies.push(newAgency);
    // this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
