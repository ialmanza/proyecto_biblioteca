import { Component, Input } from '@angular/core';
import { Libro } from '../../models/Libro';
import { LibrosServicioService } from '../../services/libros-servicio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogAnimationsExampleDialog, DialogComponent } from '../ventana-modal/ventana-modal.component';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogContentEditExampleDialog } from '../ventana-modal-editar-libro/ventana-modal-editar-libro.component';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogComponent, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {

  @Input() libros!: Libro
  editing: boolean = false;

  constructor(private librosService: LibrosServicioService, private dialog: MatDialog) { }

  deleteLibro(libro: Libro) {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      data: libro
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.librosService.deleteLibro(libro.id);
      }
    });
  }


  toggleEdit() {
    this.editing = !this.editing;
  }

  saveChanges() {
    if (this.libros) {
      this.librosService.updateLibro(this.libros);
    }
    this.toggleEdit(); // Desactiva la edición después de guardar
  }

  openEditDialog(libro: Libro) {
    const dialogRef = this.dialog.open(DialogContentEditExampleDialog, {
      data: libro
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.librosService.updateLibro(libro);
      }
    });
  }
}
