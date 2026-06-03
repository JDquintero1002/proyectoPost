import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMedico } from './listar-medico';

describe('ListarMedico', () => {
  let component: ListarMedico;
  let fixture: ComponentFixture<ListarMedico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMedico],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarMedico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
