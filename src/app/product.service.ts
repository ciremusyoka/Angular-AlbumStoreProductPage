import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
// import rxjs/add/operator/ap
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id:number) {
    return this._http.get(this._albumUrl)
    .pipe(
      map(response => response.json())
    )
  }

}
