import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesmovilComponent } from './redesmovil.component';

describe('RedesmovilComponent', () => {
  let component: RedesmovilComponent;
  let fixture: ComponentFixture<RedesmovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedesmovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesmovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
