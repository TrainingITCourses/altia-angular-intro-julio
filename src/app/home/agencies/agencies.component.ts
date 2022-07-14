import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css'],
})
export class AgenciesComponent implements OnInit {
  public agencies;
  constructor(data: DataService) {
    this.agencies = data.agencies;
  }

  ngOnInit(): void {}
}
