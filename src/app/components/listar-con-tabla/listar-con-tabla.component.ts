import { Component} from '@angular/core';
import { LibroComponent } from "../libro/libro.component";
import { LibrosServicioService } from '../../services/libros-servicio.service';
import { Libro } from '../../models/Libro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import { DialogContentEditExampleDialog } from '../ventana-modal-editar-libro/ventana-modal-editar-libro.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../ventana-modal/ventana-modal.component';

@Component({
  selector: 'app-listar-con-tabla',
  standalone: true,
  imports: [ LibroComponent, CommonModule, FormsModule, FilterPipe],
  templateUrl: './listar-con-tabla.component.html',
  styleUrl: './listar-con-tabla.component.css'
})
export class ListarConTablaComponent {

  libros: Libro[] = [];
  filteredLibros: Libro[] = [];
  searchTerm: string = '';
  displayedLibros: Libro[] = [];

  pageSizeOptions = [5, 10, 20];
  pageSize = this.pageSizeOptions[0];
  currentPage = 0;
  totalItems = 0;

  constructor(private librosServicio: LibrosServicioService, private dialog: MatDialog) {}

  ngOnInit() {
    this.librosServicio.getLibros().subscribe((libros: Libro[]) => {
      this.libros = libros;
      this.filteredLibros = libros;
      this.totalItems = libros.length;
      this.updateDisplayedLibros();
    });
  }

  filter(query: string) {
    this.filteredLibros = this.libros.filter(libro =>
      libro.titulo &&libro.titulo.toLowerCase().includes(query.toLowerCase())
    );
    this.totalItems = this.filteredLibros.length;
    this.currentPage = 0;
    this.updateDisplayedLibros();
  }
  updateDisplayedLibros() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.displayedLibros = this.filteredLibros.slice(start, end);
  }

  changePageSize(size: number) {
    this.pageSize = size;
    this.currentPage = 0;
    this.updateDisplayedLibros();
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateDisplayedLibros();
  }

  nextPage() {
    if (this.currentPage < this.totalPages() - 1) {
      this.currentPage++;
      this.updateDisplayedLibros();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateDisplayedLibros();
    }
  }

  totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }


  openEditDialog(libro: Libro) {
    const dialogRef = this.dialog.open(DialogContentEditExampleDialog, {
      data: libro
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.librosServicio.updateLibro(libro);
      }
    });
  }

  deleteLibro(libro: Libro) {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      data: libro
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.librosServicio.deleteLibro(libro.id);
      }
    });
  }



}
