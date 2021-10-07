import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const CARDS_API = 'https://bensdemo.prod.equisolve-dev.com/api/v1/eq-test'

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor(private http: HttpClient) { }

  public getCardList(): Observable<any>{

    let api = CARDS_API

    return this.http.get(api)

  }

}
