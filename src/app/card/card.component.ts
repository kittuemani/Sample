import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../logging.service';
import {CardService} from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
    providers:[LoggingService,CardService]
})
export class CardComponent implements OnInit {
  docks =[];
  cards =[];
  constructor(private logger: LoggingService, private cardService: CardService) { }

  ngOnInit() {
      this.cardService.getDockId().subscribe(
     (data)=>this.docks =data,
     error => alert(error),
     () => console.log("finished")
   );
 };

 getCards(){
   this.cardService.getTwoCards(this.docks.deck_id).subscribe(
  (data)=>this.cards =data.cards,
  error => alert(error),
  () => console.log("finished")

};

}
