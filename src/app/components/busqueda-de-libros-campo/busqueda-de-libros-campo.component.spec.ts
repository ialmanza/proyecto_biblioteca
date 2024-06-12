import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaDeLibrosCampoComponent } from './busqueda-de-libros-campo.component';

describe('BusquedaDeLibrosCampoComponent', () => {
  let component: BusquedaDeLibrosCampoComponent;
  let fixture: ComponentFixture<BusquedaDeLibrosCampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaDeLibrosCampoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusquedaDeLibrosCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
