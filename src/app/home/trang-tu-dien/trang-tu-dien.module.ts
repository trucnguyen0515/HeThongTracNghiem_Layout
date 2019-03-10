import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import component
import { TrangTuDienComponent } from './trang-tu-dien/trang-tu-dien.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TrangTuDienComponent
  ],
  exports:[
    TrangTuDienComponent
  ]
})
export class TrangTuDienModule { }
