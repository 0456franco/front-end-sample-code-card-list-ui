import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input('photo') photo: string | null = null
  @Input('title') title: string | null = null
  @Input('subtitle') subtitle: string | null = null
  @Input('bodyText') bodyText: string | null = null

  @Output() closeModalEvt = new EventEmitter

  constructor() { }

  closeModal(){
    this.closeModalEvt.emit(null)
  }

  ngOnInit(): void {
    console.log("bodyText", this.bodyText)
  }

}
