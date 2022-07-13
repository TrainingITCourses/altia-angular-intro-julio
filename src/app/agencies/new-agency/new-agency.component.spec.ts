import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAgencyComponent } from './new-agency.component';

describe('NewAgencyComponent', () => {
  let component: NewAgencyComponent;
  let fixture: ComponentFixture<NewAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
