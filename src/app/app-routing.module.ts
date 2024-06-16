import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe os componentes que serão usados nas rotas
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppComponent } from './app.component'; // home

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  //home
  { path: 'app', component: AppComponent },
  { path: 'contact-form', component: ContactFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
