import { Component, inject, Input, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {
  detailsProduct:any=[];
  productsDetail: any;
  size:any;
  colors:any;
  infoData:any;
  relatedProduct:any;
  setting_text:any;
  isLoading: boolean = true;
  selectedColor: any;
  @Input() product: any;
toaster=inject(ToastrService);
  constructor(private toastr: ToastrService,private route: ActivatedRoute, private apiService: MainService ,private cartService:CartService) { }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.apiService.getProductById(productId).subscribe((data: any) => {
        this.size=data.productSizes;
        this.colors=data.productColors;
        this.relatedProduct=data.related_products;
        this.setting_text=data.setting_text;
        setTimeout(() => {
          this.productsDetail = data.product;
          this.infoData=data.product.inventory_detail;
          this.isLoading = false; // Set isLoading to false once data is loaded
        }, 2000); // Simulating a 2-second delay
            });

    });  }

    addToCart(product: any) {
      this.cartService.addToCart(product);
      // this.toastr.success('Your product has been added to the cart!', 'Success');

      // window.alert('Your product has been added to the cart!');
    }
    showsuccess(){
      this.toastr.success('Saved successfully.','Success');
    }
    showerror(){
      this.toastr.error('Saved successfully.','Failed');
    }
    showwarning(){
      this.toastr.warning('Not matched.','Warning');
    }
    showinfo(){
      this.toastr.info('just information','Info');
    }
}

