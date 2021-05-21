import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {
  productList: Product;
  searchCategory = 0;
  constructor(
    private activatedRoute: ActivatedRoute
    , private productService: ProductsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {      
      this.searchCategory = data.id;
      this.productService.searchCategoryProduct(this.searchCategory).subscribe(data =>{
        this.productList = data;
  
        console.log('this.productList', this.productList );
      });


    });
  }
}
