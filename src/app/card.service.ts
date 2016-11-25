import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CardService {

  constructor(private http: Http) { }

  getDockId() {
      return this.http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .map(
         (res)=>res.json()
      );
 };
  getTwoCards(dockid) {
          return this.http.get('https://deckofcardsapi.com/api/deck/'+dockid+'/draw/?count=2')
          .map(
             (res)=>res.json()
          );
  }

}
