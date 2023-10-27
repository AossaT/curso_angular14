import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalumnoComponent } from './dalumno.component';

describe('DalumnoComponent', () => {
  let component: DalumnoComponent;
  let fixture: ComponentFixture<DalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
