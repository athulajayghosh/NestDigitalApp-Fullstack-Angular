import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNestGuestLogsComponent } from './view-nest-guest-logs.component';

describe('ViewNestGuestLogsComponent', () => {
  let component: ViewNestGuestLogsComponent;
  let fixture: ComponentFixture<ViewNestGuestLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNestGuestLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNestGuestLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
