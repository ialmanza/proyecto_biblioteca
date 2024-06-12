import {Component, Input, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Libro } from '../../models/Libro';
import { CommonModule } from '@angular/common';
import { LibrosServicioService } from '../../services/libros-servicio.service';
import {FormsModule} from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-ventana-modal-editar-libro',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, CommonModule, FormsModule, MatFormField],
  templateUrl: './ventana-modal-editar-libro.component.html',
  styleUrl: './ventana-modal-editar-libro.component.css'
})
export class VentanaModalEditarLibroComponent {

  constructor(public dialog: MatDialog) {}
  openEditDialog(libro: Libro) {
    const dialogRef = this.dialog.open(DialogContentEditExampleDialog, {
      data: libro
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  }

  @Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: 'editar-libro.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, CommonModule, FormsModule, MatFormField],
  })
  export class DialogContentEditExampleDialog {

    @Input() libros: Libro | undefined;
    editing: any;
    constructor (@Inject(MAT_DIALOG_DATA) public data: Libro, public dialogRef: MatDialogRef<DialogContentEditExampleDialog>, private librosService: LibrosServicioService) {

    }

    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(true);
    }

    toggleEdit() {
      this.editing = !this.editing;
      console.log(`Editing: ${this.editing}`); // Agregado para debug
    }

    saveChanges() {
      if (this.libros) {
        this.librosService.updateLibro(this.libros);
        console.log('Libro actualizado:', this.libros); // Agregado para debug
      }
      this.toggleEdit(); // Desactiva la edición después de guardar
    }
  }

