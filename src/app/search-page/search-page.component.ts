import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  searchText = '';
  searchResults: any[] = [];
  products: any;

  constructor(private apiService: ApiService, private router: Router) { }

  // Function to search for products based on the entered text
  search() {
    this.apiService.searchProducts(this.searchText).subscribe(
      (response) => {
        this.products = response;
        // Extract search results from the response
        this.searchResults = this.products["products"];
        // console.log(this.searchResults);
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }

  // Function to add border on mouse hover
  addBorder(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    element.style.border = '1px solid blue';
    element.style.transition = 'border-color 0.3s ease-in-out';
  }

  // Function to remove border when mouse leaves
  removeBorder(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    element.style.border = '1px solid #ddd';
  }

  // Function to navigate to the product details page when a product is clicked
  navigateToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
