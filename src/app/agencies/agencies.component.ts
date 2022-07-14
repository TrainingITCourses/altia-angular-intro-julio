import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RangeEnum } from '../core/models/range.enum';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css'],
})
export class AgenciesComponent implements OnInit {
  public agencies;

  constructor(private router: Router, private data: DataService) {
    this.agencies = data.agencies;
  }

  public onNewClick() {
    //this.router.navigate(['agencies', 'new']);
    this.data.agencies.push({
      id: 'altia',
      name: 'Altia',
      range: RangeEnum.Orbital,
      status: 'Active',
    });
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
