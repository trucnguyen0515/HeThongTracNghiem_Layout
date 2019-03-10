import { TrangDangKyModule } from './trang-dang-ky.module';

describe('TrangDangKyModule', () => {
  let trangDangKyModule: TrangDangKyModule;

  beforeEach(() => {
    trangDangKyModule = new TrangDangKyModule();
  });

  it('should create an instance', () => {
    expect(trangDangKyModule).toBeTruthy();
  });
});
