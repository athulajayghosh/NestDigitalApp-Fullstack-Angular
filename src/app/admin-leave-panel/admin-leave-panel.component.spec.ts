import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeavePanelComponent } from './admin-leave-panel.component';

describe('AdminLeavePanelComponent', () => {
  let component: AdminLeavePanelComponent;
  let fixture: ComponentFixture<AdminLeavePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeavePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLeavePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
