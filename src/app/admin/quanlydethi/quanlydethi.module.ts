import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanlydethiComponent } from './quanlydethi.component';
import { NganhangdethiComponent } from './nganhangdethi/nganhangdethi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChinhsuadethiComponent } from './chinhsuadethi/chinhsuadethi.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    QuanlydethiComponent,
    NganhangdethiComponent,
    ChinhsuadethiComponent,
  ],
  exports: [QuanlydethiComponent, NganhangdethiComponent]

})
export class QuanlydethiModule {}
