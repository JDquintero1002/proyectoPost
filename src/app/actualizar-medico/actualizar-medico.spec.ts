import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMedico } from './actualizar-medico';

describe('ActualizarMedico', () => {
  let component: ActualizarMedico;
  let fixture: ComponentFixture<ActualizarMedico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarMedico],
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarMedico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
