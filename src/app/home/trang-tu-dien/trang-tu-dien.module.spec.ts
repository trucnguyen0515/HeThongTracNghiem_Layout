import { TrangTuDienModule } from './trang-tu-dien.module';

describe('TrangTuDienModule', () => {
  let trangTuDienModule: TrangTuDienModule;

  beforeEach(() => {
    trangTuDienModule = new TrangTuDienModule();
  });

  it('should create an instance', () => {
    expect(trangTuDienModule).toBeTruthy();
  });
});
