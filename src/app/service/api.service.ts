import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dummyjson.com'; 
  constructor(private http: HttpClient) { }

  searchProducts(searchText: string): Observable<any> {
    const url = `${this.apiUrl}/products/search?q=${searchText}`;
    return this.http.get(url)
  }

  getProductDetails(productId: string): Observable<any> {
    const url = `${this.apiUrl}/products/${productId}`;
    return this.http.get(url);
  }

  registerUser(userData: any): Observable<any> {
    const url = `${this.apiUrl}/users/add`;
    return this.http.post(url, userData);
  }
}
