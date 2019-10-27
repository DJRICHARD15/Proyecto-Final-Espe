import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleContadoComponent } from './detalle-contado.component';

describe('DetalleContadoComponent', () => {
  let component: DetalleContadoComponent;
  let fixture: ComponentFixture<DetalleContadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleContadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleContadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
