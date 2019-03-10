export class User {
  public username: string;
  public password: string;
  public email: string;
  public ngayTao: Date;
  public daXoa: boolean;
  public trangThai: boolean;
  public capDo: number;
  constructor() {
    // this.ngayTao = new Date();
    this.daXoa = false;
    this.trangThai = false;
  }
}
