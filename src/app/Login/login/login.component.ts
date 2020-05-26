import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacionService} from './../../Servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formGroup : FormGroup;
  submitted = false;
  mensajeAlerta = null;
  // returnUrl : string;
  constructor(
    private router: Router,
    private authService : AutenticacionService
  ) {}
  ngOnInit() {
    this.initForm();
  }

  get datosForm() { return this.formGroup.controls; }

  initForm(){
    this.formGroup = new FormGroup({
      usuario : new FormControl('', [Validators.required]),
      clave : new FormControl('', [Validators.required]),

    })
  }

  onSubmit() {

    this.submitted = true;
    var usuarioIngresado  = this.datosForm.usuario.value;
    var pwIngresado =  this.datosForm.clave.value;
    
    if (this.formGroup.invalid) {
 
      return;
    }else{
      console.log('value>>',this.formGroup.value)
      this.authService.login(this.formGroup.value).subscribe(result=>{
        console.log("result->", result);
        if(result.acceso){ // si el acceso es true
          this.router.navigate(["registro"]);
        }else{
          return false;
        }
      });
    }

    // if(usuarioIngresado == "wcubas" && pwIngresado == "123"){ //ingreso correctamente
    //   this.router.navigate(["registro"]);
    // }else{ //error de clave y/o usuario
    //   this.mensajeAlerta = "Error en clave y/o usuario";
    // }
  }
}
