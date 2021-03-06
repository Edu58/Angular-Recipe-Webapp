import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetrecipesService {

  constructor(private http: HttpClient) { 
  }

  callRecipes() {
    return this.http.get("https://www.themealdb.com/api/json/v1/1/random.php")
  }
}
