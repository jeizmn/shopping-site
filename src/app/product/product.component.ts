import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: any;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // Retrieve the product ID from the route parameters
    this.productId = this.route.snapshot.params['id'];

    // Fetch product details based on the retrieved ID
    this.getProductDetails();
  }

  // Function to fetch product details from the API
  getProductDetails() {
    this.apiService.getProductDetails(this.productId).subscribe(
      (response: any) => {
        // Assign the fetched product details to the 'product' variable
        this.product = response;
      },
      (error) => {
        // Log an error if fetching product details fails
        console.error('Error fetching product details:', error);
      }
    );
  }

  // Function to navigate to the signup page when the 'Buy' button is clicked
  buy() {
    //navigate to signup page
    this.router.navigate(['/signup']);
  }

  // Function to implement image zooming logic
  zoomImage(imageUrl: string) {
    // Implement image zooming logic here
    console.log('Zooming image:', imageUrl);
  }
}
