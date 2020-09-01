import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinasmovilComponent } from './maquinasmovil.component';

describe('MaquinasmovilComponent', () => {
  let component: MaquinasmovilComponent;
  let fixture: ComponentFixture<MaquinasmovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinasmovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinasmovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
