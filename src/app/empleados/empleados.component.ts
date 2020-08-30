import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {BrowserModule}from '@angular/platform-browser'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  registro=[];
  empleado:any;
  nombre:string;
  monto:number;
  contador:number;

  constructor() { }

  ngOnInit(): void {
    this.nombre = "";
    this.monto = 0;
    this.contador = 0;
  }

  insertar(){
    
        var afp:number = this.monto * 0.051;
        var isss:number = this.monto * 0.073;
        var renta:number = this.monto * 0.11;
        var sueldo_total:number = afp + isss + renta + this.monto ;


        this.empleado={"nombre":this.nombre, "isss":isss, "renta":renta, "afp":afp, "sueldo_total":sueldo_total};
        this.registro.push(this.empleado);
        this.contador++;
    
  }

}
