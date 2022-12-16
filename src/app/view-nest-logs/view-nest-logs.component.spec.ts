import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNestLogsComponent } from './view-nest-logs.component';

describe('ViewNestLogsComponent', () => {
  let component: ViewNestLogsComponent;
  let fixture: ComponentFixture<ViewNestLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNestLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNestLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
