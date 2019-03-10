import { TrangChuModule } from './trang-chu.module';

describe('TrangChuModule', () => {
  let trangChuModule: TrangChuModule;

  beforeEach(() => {
    trangChuModule = new TrangChuModule();
  });

  it('should create an instance', () => {
    expect(trangChuModule).toBeTruthy();
  });
});
