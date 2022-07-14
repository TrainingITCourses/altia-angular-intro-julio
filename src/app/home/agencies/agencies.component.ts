import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css'],
})
export class AgenciesComponent implements OnInit {
  @Input() public agencies: any[] = [];

  ngOnInit(): void {}
}
