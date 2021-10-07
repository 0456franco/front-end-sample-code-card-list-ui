import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { CardModule } from '../card/card.module'

const routes : Routes = [
  { path : '', component : HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
