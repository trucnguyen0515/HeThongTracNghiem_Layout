import { QuanlyuserComponent } from './quanlyuser/quanlyuser.component';
import { QuanlycauhoiComponent } from './quanlycauhoi/quanlycauhoi.component';
import { Routes, RouterModule } from '@angular/router';
import { QuanlydethiModule } from './quanlydethi/quanlydethi.module';
import { QuanlycauhoiModule } from './quanlycauhoi/quanlycauhoi.module';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { QuanlydethiComponent } from './quanlydethi/quanlydethi.component';
import { QuanlyuserModule } from './quanlyuser/quanlyuser.module';

const AdminRouter: Routes = [
  {path: 'quantri', component: AdminComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'quantri', component: DashboardComponent },
    { path: 'quanlycauhoi', component: QuanlycauhoiComponent },
    { path: 'quanlydethi', component: QuanlydethiComponent },
    { path: 'quanlynguoidung', component: QuanlyuserComponent }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    QuanlycauhoiModule,
    QuanlydethiModule,
    QuanlyuserModule,
    RouterModule.forChild(AdminRouter),
  ],
  exports: [
    QuanlycauhoiModule,
    QuanlydethiModule,
    QuanlyuserModule,
    AdminComponent,
    DashboardComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SidebarAdminComponent
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SidebarAdminComponent
  ]
})
export class AdminModule {}
