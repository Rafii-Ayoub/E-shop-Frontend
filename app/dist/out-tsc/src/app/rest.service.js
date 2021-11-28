import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let RestService = class RestService {
    constructor(http) {
        this.http = http;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
    extractData(res) {
        let body = res;
        return body || {};
    }
    getShops() {
        const apiUrl = "http://localhost:3000/api/shops";
        return this.http.get(apiUrl, httpOptions).pipe(map(this.extractData), catchError(this.handleError));
    }
    getShop(id) {
        const apiUrl = "http://localhost:3000/api/shop/" + id;
        return this.http.get(apiUrl, httpOptions).pipe(map(this.extractData), catchError(this.handleError));
    }
    createShop(data) {
        const apiUrl = "http://localhost:3000/api/shop/";
        return this.http.post(apiUrl, data, httpOptions).pipe(catchError(this.handleError));
    }
    updateShop(id, data) {
        const apiUrl = "http://localhost:3000/api/shop/" + id;
        return this.http.put(apiUrl, data, httpOptions).pipe(catchError(this.handleError));
    }
    deleteShop(id) {
        const apiUrl = "http://localhost:3000/api/shop/" + id;
        return this.http.delete(apiUrl, httpOptions).pipe(catchError(this.handleError));
    }
    getCategories() {
        const apiUrl = "http://localhost:3000/api/categories";
        return this.http.get(apiUrl, httpOptions).pipe(map(this.extractData), catchError(this.handleError));
    }
    getCategory(id) {
        const apiUrl = "http://localhost:3000/api/category/" + id;
        return this.http.get(apiUrl, httpOptions).pipe(map(this.extractData), catchError(this.handleError));
    }
    createCategory(data) {
        const apiUrl = "http://localhost:3000/api/category/";
        return this.http.post(apiUrl, data, httpOptions).pipe(catchError(this.handleError));
    }
    updateCategory(id, data) {
        const apiUrl = "http://localhost:3000/api/category/" + id;
        return this.http.put(apiUrl, data, httpOptions).pipe(catchError(this.handleError));
    }
    deleteCategory(id) {
        const apiUrl = "http://localhost:3000/api/category/" + id;
        return this.http.delete(apiUrl, httpOptions).pipe(catchError(this.handleError));
    }
    getProducts() {
        const apiUrl = "http://localhost:3000/api/products";
        return this.http.get(apiUrl, httpOptions).pipe(map(this.extractData), catchError(this.handleError));
    }
    getroduct(id) {
        const apiUrl = "http://localhost:3000/api/product/" + id;
        return this.http.get(apiUrl, httpOptions).pipe(map(this.extractData), catchError(this.handleError));
    }
    createroduct(data) {
        const apiUrl = "http://localhost:3000/api/product/";
        return this.http.post(apiUrl, data, httpOptions).pipe(catchError(this.handleError));
    }
    updateProduct(id, data) {
        const apiUrl = "http://localhost:3000/api/product/" + id;
        return this.http.put(apiUrl, data, httpOptions).pipe(catchError(this.handleError));
    }
    deleteProduct(id) {
        const apiUrl = "http://localhost:3000/api/product/" + id;
        return this.http.delete(apiUrl, httpOptions).pipe(catchError(this.handleError));
    }
};
RestService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RestService);
export { RestService };
//# sourceMappingURL=rest.service.js.map