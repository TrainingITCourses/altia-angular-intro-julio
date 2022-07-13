import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-agency',
  templateUrl: './view-agency.component.html',
  styleUrls: ['./view-agency.component.css'],
})
export class ViewAgencyComponent implements OnInit {
  public agencyId: string;
  constructor(private route: ActivatedRoute) {
    this.agencyId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {}
}
