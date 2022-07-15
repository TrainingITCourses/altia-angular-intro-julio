import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public title: string = 'Astro Bookings';
  public agenciesCount$!: Observable<number>;

  constructor(store: StoreService) {
    //this.agenciesCount = store.state.agenciesCount;
    this.agenciesCount$ = store.state$.pipe(map((eso) => eso.agenciesCount));
  }

  ngOnInit(): void {}
}
