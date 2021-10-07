import { Component, OnInit } from '@angular/core';
import { mockCardList } from '../shared/mock/card.mock';
import { Card } from '../shared/models/card';
import { CardListService } from '../shared/services/card-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardList: Array<Card> = mockCardList
  
  public selectedCard: Card | null = null

  public showModal: boolean = false

  constructor(private cardListService: CardListService) { }

  private getCardList(){
    this.cardListService.getCardList().subscribe(
      resp => {

        this.getCardListCB(resp)

      },
      error => {
        
        //TO-DO: Log error into Sentry.

      }
    )
  }

  private getCardListCB(resp: any){

    if(resp)
      this.cardList = resp
    else
      console.log("getCardListCB", resp)
    
  }

  public fetchMyRealData(){
    this.getCardList()
  }

  ngOnInit(): void {
    
    

  }

}
