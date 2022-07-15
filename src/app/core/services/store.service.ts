import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public state = { agenciesCount: 0, user: 'Anonymous' };

  public state$: Subject<any> = new Subject();

  constructor() {}
}
