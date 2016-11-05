import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { firebaseConfig } from '../app.apis';
import { Client } from './client';

@Injectable()
export class ClientPanelService {

  constructor(private http : Http) { }
 
  postNewTurnFirebase(client : Client, typeServices : string) : Promise<any> {
    let headers = new Headers({'authorization' : 'AIzaSyA0wi-ATpo8xOrvsJVisHCWFk5ccVB0Bxg'});
    let options = new RequestOptions({ headers : headers});
    return this.http.post(firebaseConfig.databaseURL + "servicios/" + typeServices + ".json", client, options)
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError);
  }
  

  getTurnsFirebase(typeServices : string) : Promise<any[]> {
    let headers = new Headers({'authorization' : 'AIzaSyA0wi-ATpo8xOrvsJVisHCWFk5ccVB0Bxg'});
    let options = new RequestOptions({ headers : headers});
    return this.http.get(firebaseConfig.databaseURL + "servicios/" + typeServices + ".json", options)
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError);
  }

  getTurnFirebase(typeServices : string, key : string) : Promise<Client> {
    let headers = new Headers({'authorization' : 'AIzaSyA0wi-ATpo8xOrvsJVisHCWFk5ccVB0Bxg'});
    let options = new RequestOptions({ headers : headers});
    return this.http.get(firebaseConfig.databaseURL + "servicios/" + typeServices + "/" + key + ".json", options)
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError);
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
