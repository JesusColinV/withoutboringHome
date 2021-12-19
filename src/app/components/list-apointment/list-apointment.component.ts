import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-apointment',
  templateUrl: './list-apointment.component.html',
  styleUrls: ['./list-apointment.component.css']
})
export class ListApointmentComponent implements OnInit {

  

  constructor() { 
  }

  ngOnInit(): void {
  }

  calculadora(){
    window.open('https://hackathoncalculadora.netlify.app');
  }
  opiniones(){
    window.open('http://localhost:8095')
  }

  itinerario(){
    window.open('https://itinerariohackathon.netlify.app')
  }
  checklist(){
    window.open('https://check-list-jacv.netlify.app')
  }
  clima(){
    window.open('https://web-ng-weather-jacv.netlify.app')
  }
  vuelos(){
    window.open('https://www.google.com/flights/?hl=es_419')
  }
 
  

  
}
