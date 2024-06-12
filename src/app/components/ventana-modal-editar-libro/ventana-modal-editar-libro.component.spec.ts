import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaModalEditarLibroComponent } from './ventana-modal-editar-libro.component';

describe('VentanaModalEditarLibroComponent', () => {
  let component: VentanaModalEditarLibroComponent;
  let fixture: ComponentFixture<VentanaModalEditarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaModalEditarLibroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentanaModalEditarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
