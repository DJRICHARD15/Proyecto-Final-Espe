import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContadoComponent } from './edit-contado.component';

describe('EditContadoComponent', () => {
  let component: EditContadoComponent;
  let fixture: ComponentFixture<EditContadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
