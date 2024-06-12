import { Component, OnInit } from '@angular/core';
import { LibrosServicioService } from '../../services/libros-servicio.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-libro',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  providers: [LibrosServicioService],
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {
  errorMessage: string = '';

  libro: any = {
    titulo: '',
    isbn: '',
    primerautor: '',
    segundoautor: '',
    tercerautor: '',
    fechapublicacion: '',
    editorial: '',
    genero: '',
    paginas: '',
    descripcion: ''
  };

  constructor(private librosService: LibrosServicioService, private router: Router) {}

  ngOnInit() {}

  addLibro() {
    if (!this.libro.editorial || !this.libro.genero) {
      this.errorMessage = "No se pueden dejar campos vacíos para 'Editorial' o 'Género'.";
      return;
    }
    const id = Date.now().toString();
    this.librosService.addLibro({
      id,
      ...this.libro,
      hide: true,
    });


    this.libro = {
      titulo: '',
      isbn: '',
      primerautor: '',
      segundoautor: '',
      tercerautor: '',
      fechapublicacion: '',
      editorial: '',
      genero: '',
      paginas: '',
      descripcion: ''
    };
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.addLibro();
    this.router.navigate(['/listar-tabla']);
  }

  onClick() {
    this.router.navigate(['/listar-tabla']);
  }
}


