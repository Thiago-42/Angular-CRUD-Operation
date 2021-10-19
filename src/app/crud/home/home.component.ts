import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(public crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getAll().subscribe((data: Product[])=>{
      console.log(data);
      this.products = data;
    })  
  }

}
