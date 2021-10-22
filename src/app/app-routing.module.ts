import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudRoutingModule } from './crud/crud-routing.module';
import { CrudModule} from './crud/crud.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crud/home',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'crud',
        loadChildren: () => CrudModule
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CrudRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
