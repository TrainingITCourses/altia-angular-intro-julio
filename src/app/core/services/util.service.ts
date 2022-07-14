import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  public getIdFromRoute(route: ActivatedRoute, param = 'id'): string {
    return route.snapshot.paramMap.get(param) || '';
  }

  public getControl(formGroup: FormGroup, formControlName: string) {
    return formGroup.controls[formControlName];
  }
}
