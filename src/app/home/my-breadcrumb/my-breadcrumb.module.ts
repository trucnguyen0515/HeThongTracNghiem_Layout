import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBreadcrumbComponent } from './my-breadcrumb/my-breadcrumb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyBreadcrumbComponent],
  exports:[MyBreadcrumbComponent]
})
export class MyBreadcrumbModule { }
