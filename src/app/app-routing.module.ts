import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudModule } from './crud/crud.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crud/create',
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
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
