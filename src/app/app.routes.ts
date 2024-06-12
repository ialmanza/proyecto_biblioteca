import { Routes } from '@angular/router';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { LibroComponent } from './components/libro/libro.component';
//import { DialogComponent } from './components/ventana-modal/ventana-modal.component';
import { ListarConTablaComponent } from './components/listar-con-tabla/listar-con-tabla.component';
import { BusquedaDeLibrosCampoComponent } from './components/busqueda-de-libros-campo/busqueda-de-libros-campo.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';

export const routes: Routes = [
  { path: 'crear-libro', component: CrearLibroComponent },
  { path: 'libro', component: LibroComponent },
 // { path: 'modificar-libro', component: DialogComponent },
  { path: 'listar-tabla', component: ListarConTablaComponent },
  { path: 'buscar-libro', component: BusquedaDeLibrosCampoComponent },
  { path: 'editar-libro', component: EditarLibroComponent },
  { path: '', redirectTo: 'listar-tabla', pathMatch: 'full' },
];
