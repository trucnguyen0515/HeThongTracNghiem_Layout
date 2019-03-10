import { QuanlycauhoiModule } from './quanlycauhoi.module';

describe('QuanlycauhoiModule', () => {
  let quanlycauhoiModule: QuanlycauhoiModule;

  beforeEach(() => {
    quanlycauhoiModule = new QuanlycauhoiModule();
  });

  it('should create an instance', () => {
    expect(quanlycauhoiModule).toBeTruthy();
  });
});
