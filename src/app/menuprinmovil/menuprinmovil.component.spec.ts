import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprinmovilComponent } from './menuprinmovil.component';

describe('MenuprinmovilComponent', () => {
  let component: MenuprinmovilComponent;
  let fixture: ComponentFixture<MenuprinmovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuprinmovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuprinmovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
