import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Observable  } from "rxjs/Observable";
import { Subject  } from "rxjs/Subject";
import 'rxjs/Rx';
@Injectable()
export class UserService {

  constructor(private http: Http) { }

  public authenticate(){
    return this.http.get('http://localhost:3000/users/oauth2-url')
        .map((response :Response) => response.json())
        .catch((error :any) => Observable.throw(error.json().error || 'Server Error'));
  }

  public getTokens(code){
    return this.http.get(`http://localhost:3000/users/oauth2-tokens/${code}`)
               .map((response :Response) => response.json())
               .catch((error :any) => Observable.throw(error.json().error || 'Server Error'));
  }


}
