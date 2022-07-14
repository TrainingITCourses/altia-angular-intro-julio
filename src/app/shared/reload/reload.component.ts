import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css'],
})
export class ReloadComponent implements OnInit {
  @Input() public isReloading = false;
  @Input() public dataName = '';
  @Output() public reload = new EventEmitter<string>();

  public onReloadClick(): void {
    this.reload.emit(this.dataName);
  }

  ngOnInit(): void {}
}
