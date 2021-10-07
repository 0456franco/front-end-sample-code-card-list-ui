import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { SafeHtmlPipe } from '../shared/pipes/safe-html.pipe';

@NgModule({
  declarations: [ ModalComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
  ],
  exports: [ ModalComponent ]
})
export class ModalModule { }
