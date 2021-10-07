import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../shared/models/card';

const PLACEHODLER_IMAGE = 'https://johnloomis.org/ece563/notes/basics/depth/einstein.jpg'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('card') card: Card | null = null

  public placeholderImage = PLACEHODLER_IMAGE

  public showModal: boolean = false

  constructor() { }

  public viewBio(){
    this.showModal = true
  }

  public closeModal(){
    this.showModal = false
  }

  ngOnInit(): void {
  }

}
