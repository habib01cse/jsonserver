import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form){
    console.log('form.value', form.value);
    let newProduct = {     
      id: 7,
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

    console.log('newProduct', newProduct);

    this.productService.createProduct(newProduct).subscribe(result =>{
     
      console.log('result!!',result );
    });
    console.log('newProduct 1', newProduct);
  }

}
