import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallEmpComponent } from './viewall-emp.component';

describe('ViewallEmpComponent', () => {
  let component: ViewallEmpComponent;
  let fixture: ComponentFixture<ViewallEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
