import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCalculoComponent } from './detalle-calculo.component';

describe('DetalleCalculoComponent', () => {
  let component: DetalleCalculoComponent;
  let fixture: ComponentFixture<DetalleCalculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCalculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
