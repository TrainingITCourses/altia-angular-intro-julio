import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-item',
  templateUrl: './agency-item.component.html',
  styleUrls: ['./agency-item.component.css'],
})
export class AgencyItemComponent implements OnInit {
  @Input() public agency!: any;

  constructor() {}

  ngOnInit(): void {}
}
