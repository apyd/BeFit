import {Component, OnInit} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {Product} from '../shared/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
      this.http.getProducts().subscribe(products => this.products = products);
  }

}
