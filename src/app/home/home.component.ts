import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public isReloading = false;

  public reload(): void {
    this.isReloading = true;
    console.log('♻️ Reloading...');
  }

  ngOnInit(): void {}
}
