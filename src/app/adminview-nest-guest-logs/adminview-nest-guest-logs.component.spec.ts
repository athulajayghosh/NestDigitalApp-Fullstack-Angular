import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewNestGuestLogsComponent } from './adminview-nest-guest-logs.component';

describe('AdminviewNestGuestLogsComponent', () => {
  let component: AdminviewNestGuestLogsComponent;
  let fixture: ComponentFixture<AdminviewNestGuestLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewNestGuestLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewNestGuestLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
