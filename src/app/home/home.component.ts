import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public agencies;
  constructor(data: DataService) {
    this.agencies = data.agencies;
  }
  ngOnInit(): void {}
}
