import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CrudModule } from './crud/crud.module';
import { CrudRoutingModule } from './crud/crud-routing.module';
import { CrudService } from './crud/crud.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    CrudRoutingModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
