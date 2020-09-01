import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorusuariosmovilComponent } from './gestorusuariosmovil.component';

describe('GestorusuariosmovilComponent', () => {
  let component: GestorusuariosmovilComponent;
  let fixture: ComponentFixture<GestorusuariosmovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorusuariosmovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorusuariosmovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
