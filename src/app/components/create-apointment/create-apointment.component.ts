import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-apointment',
  templateUrl: './create-apointment.component.html',
  styleUrls: ['./create-apointment.component.css']
})
export class CreateApointmentComponent implements OnInit {

  name: string ='';
  date: string ='';
  time: string ='';
  syntoms: string ='';

  formError: boolean = false;

  @Output() newAppointment = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  ruleta(){
    window.open('https://ruletaactividades.netlify.app');
  }
  noticias(){
    window.open('http://localhost:4200')
  }
  tripadvisor(){
    window.open('https://www.tripadvisor.com.mx')
  }
  ejercicios(){
    window.open('https://finisher.es/blog/rutina-casa-ejercicios-deporte/')
  }
  peliculas(){
    window.open('https://cuevana3.io')
  }
  libros(){
    window.open('https://libreappgerardoq.netlify.app')
  }
  imagenes(){
    window.open('https://wen-ng-pixabay-jacv.netlify.app')
  }
}
