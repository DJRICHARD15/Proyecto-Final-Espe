import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoPresupuestarioComponent } from './certificado-presupuestario.component';

describe('CertificadoPresupuestarioComponent', () => {
  let component: CertificadoPresupuestarioComponent;
  let fixture: ComponentFixture<CertificadoPresupuestarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoPresupuestarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoPresupuestarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
