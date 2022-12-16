import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestLogsComponent } from './nest-logs.component';

describe('NestLogsComponent', () => {
  let component: NestLogsComponent;
  let fixture: ComponentFixture<NestLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
