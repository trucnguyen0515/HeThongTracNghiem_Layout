import { TrangDanhSachDanhMucModule } from './trang-danh-sach-danh-muc.module';

describe('TrangDanhSachDanhMucModule', () => {
  let trangDanhSachDanhMucModule: TrangDanhSachDanhMucModule;

  beforeEach(() => {
    trangDanhSachDanhMucModule = new TrangDanhSachDanhMucModule();
  });

  it('should create an instance', () => {
    expect(trangDanhSachDanhMucModule).toBeTruthy();
  });
});
