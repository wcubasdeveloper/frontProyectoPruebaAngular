import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingModule } from './app.routing';
import { LoginComponent } from './Login/login/login.component';
import { RegistroComponent } from './Desinfeccion/registro/registro.component';
import { Web404Component } from './Default/web404/web404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Servicios/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    Web404Component
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
