import { TrangDangNhapModule } from './trang-dang-nhap.module';

describe('TrangDangNhapModule', () => {
  let trangDangNhapModule: TrangDangNhapModule;

  beforeEach(() => {
    trangDangNhapModule = new TrangDangNhapModule();
  });

  it('should create an instance', () => {
    expect(trangDangNhapModule).toBeTruthy();
  });
});
