import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConTablaComponent } from './listar-con-tabla.component';

describe('ListarConTablaComponent', () => {
  let component: ListarConTablaComponent;
  let fixture: ComponentFixture<ListarConTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarConTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarConTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
