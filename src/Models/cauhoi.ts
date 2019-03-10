export class CauHoi {
  public id: any;
  public tieuDe: string;
  public noiDung: string;
  public ghiChu: string;
  public loaiCauHoi: number;
  public ngayTao: any;
  public thoiGian: number;
  public nguoiTao: any;
  public diem: number;
  public daXoa: boolean;
  public trangThai: boolean;
  public goiY: any;
  public capDo: number;
  public linhVuc: string;
  public ngonNgu: string;
  public danhSachDapAn: Array<any>;
  public chuDe: number;
  constructor() {
    // this.ngayTao = new Date().toLocaleDateString();
    this.daXoa = false;
    this.trangThai = false;
  }
}
