import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { Product  as productModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId = 0;
  //productDtl: Product;
  public productDtl = new productModel();
  constructor(private activatedRoute: ActivatedRoute
    , private productService: ProductsService) { }

  ngOnInit(): void {    
    this.activatedRoute.params.subscribe(data => {
      console.log('data !!', data);
      this.productId = data.id;      
    });


    this.productService.viewProduct(this.productId).subscribe(productData =>{       
      this.productDtl = new productModel( productData );  
      console.log('this.productDtl', this.productDtl );
    });

  }

}
