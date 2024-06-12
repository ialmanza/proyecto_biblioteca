import { Injectable } from '@angular/core';
import { Libro } from '../models/Libro';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibrosServicioService {
  private librosSubject: BehaviorSubject<Libro[]> = new BehaviorSubject<Libro[]>([])

  constructor() {
    this.loadLibrosFromLocalStorage();
   }

   getLibros():Observable<Libro[]> {
    return this.librosSubject.asObservable();

   }

   addLibro(libro: Libro) {
    const storedLibros = this.getLibrosFromLocalStorage();
    storedLibros.push(libro);
    this.saveLibrosToLocalStorage(storedLibros);
    this.librosSubject.next(storedLibros);
   }

   deleteLibro(id: string) {
    let storedLibros = this.getLibrosFromLocalStorage();
    storedLibros = storedLibros.filter((libro: { id: string; }) => libro.id !== id);
    this.saveLibrosToLocalStorage(storedLibros);
    this.librosSubject.next(storedLibros);
   }

   updateLibro(updatedLibro: Libro) {
    let storedLibros = this.getLibrosFromLocalStorage();
    const index = storedLibros.findIndex(libro => libro.id === updatedLibro.id);
    if (index !== -1) {
        storedLibros[index] = updatedLibro;
        this.saveLibrosToLocalStorage(storedLibros);
        this.librosSubject.next(storedLibros);
    } else {
        console.error('Book not found in local storage.');
    }
   }

  //  private loadLibrosFromLocalStorage() {
  //   const storedLibros = this.getLibrosFromLocalStorage();
  //   this.librosSubject.next(storedLibros);
  // }

  // private getLibrosFromLocalStorage(): Libro[] {
  //   const storedLibros = localStorage.getItem('libros');
  //   return storedLibros ? JSON.parse(storedLibros) : [];
  // }

  // private saveLibrosToLocalStorage(libros: Libro[]) {
  //   localStorage.setItem('libros', JSON.stringify(libros));
  // }

  private loadLibrosFromLocalStorage() {
    const storedLibros = this.getLibrosFromLocalStorage();
    this.librosSubject.next(storedLibros);
  }

  private getLibrosFromLocalStorage(): Libro[] {
    if (typeof localStorage !== 'undefined') {
      const storedLibros = localStorage.getItem('libros');
      return storedLibros ? JSON.parse(storedLibros) : [];
    } else {
      console.warn('localStorage is not available.');
      return [];
    }
  }


  private saveLibrosToLocalStorage(libros: Libro[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('libros', JSON.stringify(libros));
    } else {
      console.warn('localStorage is not available.');
    }
  }


}

