import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }
 fetchMovies() {

     return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=b990fa5846ff95d04d47371bea09945f&language=en-US')
     .map(
        (res)=>res.json()
     );

 }
}
