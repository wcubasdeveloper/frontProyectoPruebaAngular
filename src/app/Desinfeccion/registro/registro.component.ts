import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacionService} from './../../Servicios/autenticacion.service';
import { Desinfeccion } from '../../Modelos/desinfeccion';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  
})
export class RegistroComponent implements OnInit {

  constructor(
    private router: Router,
    private authService : AutenticacionService,
  ) {}

  desinfeccion : Desinfeccion[];
  ngOnInit(): void {
    this.authService.desinfeccion().subscribe(
        data =>{
          this.desinfeccion = data;
          console.log("data response",this.desinfeccion);
        }
    )
  }


}
