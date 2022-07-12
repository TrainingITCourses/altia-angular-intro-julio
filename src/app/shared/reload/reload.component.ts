import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css'],
})
export class ReloadComponent implements OnInit {
  public isReloading = false;

  public reload(): void {
    this.isReloading = true;
    console.log('♻️ Reloading...');
  }

  ngOnInit(): void {}
}
