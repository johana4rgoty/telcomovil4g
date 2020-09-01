import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sliderbar4gComponent } from './sliderbar4g.component';

describe('Sliderbar4gComponent', () => {
  let component: Sliderbar4gComponent;
  let fixture: ComponentFixture<Sliderbar4gComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sliderbar4gComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sliderbar4gComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
