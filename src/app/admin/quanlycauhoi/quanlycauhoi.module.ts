import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NganhangcauhoiComponent } from './nganhangcauhoi/nganhangcauhoi.component';
import { QuanlycauhoiComponent } from './quanlycauhoi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChinhsuacauhoiComponent } from './chinhsuacauhoi/chinhsuacauhoi.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    NganhangcauhoiComponent,
    QuanlycauhoiComponent,
    ChinhsuacauhoiComponent
  ],
  exports: [NganhangcauhoiComponent, QuanlycauhoiComponent]
})
export class QuanlycauhoiModule {}
