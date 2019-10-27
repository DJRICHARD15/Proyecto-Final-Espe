import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpagoComponent } from './unpago.component';

describe('UnpagoComponent', () => {
  let component: UnpagoComponent;
  let fixture: ComponentFixture<UnpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
