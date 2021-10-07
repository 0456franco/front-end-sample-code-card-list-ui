import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
