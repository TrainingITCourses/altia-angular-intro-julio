import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilService } from '../core/services/util.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(formBuilder: FormBuilder, private util: UtilService) {
    this.formGroup = formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]),
      message: new FormControl('Contact with me, please.', [
        Validators.maxLength(10),
      ]),
    });
  }

  public isInvalid(formControlName: string): boolean {
    const control = this.getControl(formControlName);
    if (control) {
      return control.invalid;
    }
    return true;
  }

  public isTouched(formControlName: string): boolean {
    const control = this.getControl(formControlName);
    if (control) {
      return control.touched;
    }
    return true;
  }

  public mustShowError(formControlName: string): boolean {
    return this.isTouched(formControlName) && this.isInvalid(formControlName);
  }

  public getControl(formControlName: string) {
    return this.util.getControl(this.formGroup, formControlName);
  }

  public onSendClick() {
    console.warn('Sending ', this.formGroup.value);
  }

  ngOnInit(): void {}
}
