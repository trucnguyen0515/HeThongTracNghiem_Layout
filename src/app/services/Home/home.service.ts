import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DanhMuc } from 'src/app/home/models/danhmuc';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  private DanhSachDanhMuc:string = '/src/app/services/Home/DanhSachDanhMuc.json';
  private ChiTietDanhMuc:string = '/src/app/services/Home/ChiTietDanhMuc.json';

  public get_DanhMuc():Observable<DanhMuc[]>
  {
    return this.http.get<DanhMuc[]>(this.DanhSachDanhMuc)
  }

  public get_ChiTiet_DanhMuc(id):Observable<any>
  {
    // if(id == "cate3"){
      return this.http.get(this.ChiTietDanhMuc)
    // }
  }

}
