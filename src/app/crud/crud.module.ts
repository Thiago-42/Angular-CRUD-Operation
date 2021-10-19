import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CrudRoutingModule } from './crud-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CrudModule { }
