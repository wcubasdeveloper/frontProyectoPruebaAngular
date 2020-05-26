import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
//   title = 'app';
// }

export class AppComponent {
  title = 'registroSupervisor';
  constructor(
    private router: Router
    //private autenticacionService: AutenticacionService,
  ) {
    //this.autenticacionService.usuarioActual.subscribe(x => this.usuarioActual = x);
  }
}
