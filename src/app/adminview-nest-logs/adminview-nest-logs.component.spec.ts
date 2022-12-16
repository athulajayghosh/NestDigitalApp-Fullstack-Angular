import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewNestLogsComponent } from './adminview-nest-logs.component';

describe('AdminviewNestLogsComponent', () => {
  let component: AdminviewNestLogsComponent;
  let fixture: ComponentFixture<AdminviewNestLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewNestLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewNestLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
