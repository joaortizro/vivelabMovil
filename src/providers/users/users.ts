//import { HttpClient } from '@angular/common/http';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'
/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  usersURL="https://jsonplaceholder.typicode.com/users";
  photosURL="https://jsonplaceholder.typicode.com/photos"
  constructor(public http: Http) {
    
  }
   getUsers(){
     return this.http.get(this.usersURL).map((response:Response)=>
     {  
       return response;
     }
   ).catch(this.handleError);

   }
   getPhotos(){
    return this.http.get(this.photosURL).map((response:Response)=>
    {  
      return response;
    }).catch(this.handleError);
   }



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
