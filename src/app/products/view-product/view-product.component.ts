import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId = 0;
  productDtl: Product;
  constructor(private activatedRoute: ActivatedRoute
    , private productService: ProductsService) { }

  ngOnInit(): void {    
    this.activatedRoute.params.subscribe(data => {
      console.log('data !!', data);
      this.productId = data.id;      
    });


    this.productService.viewProduct(this.productId).subscribe(productData =>{
      this.productDtl = productData;  
      console.log('this.productDtl', this.productDtl );
    });

  }

}
