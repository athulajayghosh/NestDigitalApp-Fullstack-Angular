import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestGuestLogsComponent } from './nest-guest-logs.component';

describe('NestGuestLogsComponent', () => {
  let component: NestGuestLogsComponent;
  let fixture: ComponentFixture<NestGuestLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestGuestLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestGuestLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
