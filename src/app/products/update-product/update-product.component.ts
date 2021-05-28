import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { Product  as productModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public productDtl = new productModel();
  productId = 0;
  constructor(private activatedRoute: ActivatedRoute
    , private productService: ProductsService
    ) { +
      //this.productDtl = new productModel();
      console.log('this.productDtl const', this.productDtl);
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productService.viewProduct(this.productId).subscribe(productData =>{
        this.productDtl = new productModel( productData );  
        console.log('this.productDtl get', this.productDtl );
      });

    });    
  }

  updateProduct(form){

    console.log('form.value', form.value);

    let updateProduct = {         
      categoryId: form.value.product_category, 
      productName: form.value.product_name, 
      description: form.value.product_description, 
      productImg: '',
      price: form.value.product_price, 
      is_visible: 1, 
      rating: form.value.product_rating, 
      reviews: form.value.product_reviews, 
      vendor_name: '', 
      warranty: '', 
    }

    console.log('updateProduct', updateProduct);

    this.productService.updateProduct(this.productId, updateProduct).subscribe(result =>{
     
      console.log('result!!',result );
    });



    console.log('updateProduct 1', updateProduct);
  }


}
