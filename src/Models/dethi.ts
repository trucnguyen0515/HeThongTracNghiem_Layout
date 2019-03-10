import { CauHoi } from './cauhoi';

export class DeThi {
  public tieuDe: string;
  public noiDung: string;
  public ghiChu: string;
  public ngayTao: any;
  public thoiGian: number;
  public maNguoiTao: number;
  public diem: number;
  public daXoa: boolean;
  public trangThai: boolean;
  public goiY: string;
  public capDo: number;
  public linhVuc: string;
  public ngonNgu: string;
  public danhSachCauHoi: Array<CauHoi>;

  constructor() {
    this.danhSachCauHoi = new Array;
    // this.ngayTao = new Date().toLocaleDateString();
    this.daXoa = false;
    this.trangThai = false;
    this.capDo = null;
    this.linhVuc = null;
    this.ngonNgu = null;
  }
}
