//import { HttpClient } from '@angular/common/http';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  albumURL="https://jsonplaceholder.typicode.com/albums"
  photosURL="https://jsonplaceholder.typicode.com/photos"
  constructor(public http: Http) {
   
  }

  getAlbumsbyId(id){
    const url = `${this.albumURL}?userId=${id}`
    return this.http.get(url).map((response:Response)=>
    {  
      return response;
    }
  ).catch(this.handleError);
  }
  
  getPhotosbyAlbumId(id){
    const url = `${this.photosURL}?albumId=${id}`;
    return this.http.get(url).map((response:Response)=>
    {  
      return response;
    }
  ).catch(this.handleError);
  }



    //FUNCTION FROM ANGULAR.IO 
    private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      // alert(errMsg);
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
}
