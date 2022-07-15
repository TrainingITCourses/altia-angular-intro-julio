import { Component, Input, OnInit } from '@angular/core';

export type AgencyItemType = {
  name: string;
  range: string;
  status: string;
};
export type AgenciesViewType = {
  agenciesCount: number;
  agenciesList: AgencyItemType[];
};

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css'],
})
export class AgenciesComponent implements OnInit {
  // @Input() public agencies: AgencyType[] = [];
  @Input() agenciesView!: AgenciesViewType;

  ngOnInit(): void {}
}
