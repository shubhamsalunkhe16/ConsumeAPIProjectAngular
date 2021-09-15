import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    pathMatch: 'full',
  },
  {
    path: 'userDetails',
    component: UserhomeComponent,
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
