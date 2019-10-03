import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { ComponentesComponent } from './componentes/componentes.component';

const routes : Routes= [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { 
    path: 'home', component: HomeComponent
  },
  { 
    path: 'forms', component: FormsComponent
  },
  { 
    path: 'componentes', component: ComponentesComponent
  },
  { 
    path: 'componentes/:id', component: EmpleadoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    HomeComponent,
    FormsComponent,
    ComponentesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
