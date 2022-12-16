import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallsecComponent } from './viewallsec.component';

describe('ViewallsecComponent', () => {
  let component: ViewallsecComponent;
  let fixture: ComponentFixture<ViewallsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallsecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
