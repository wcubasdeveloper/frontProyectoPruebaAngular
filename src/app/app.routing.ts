import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { RegistroComponent } from './Desinfeccion/registro/registro.component';

const routes: Routes = [
    { path: '', component: LoginComponent},
    // { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);