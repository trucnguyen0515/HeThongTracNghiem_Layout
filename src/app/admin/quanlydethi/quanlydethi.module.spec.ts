import { QuanlydethiModule } from './quanlydethi.module';

describe('QuanlydethiModule', () => {
  let quanlydethiModule: QuanlydethiModule;

  beforeEach(() => {
    quanlydethiModule = new QuanlydethiModule();
  });

  it('should create an instance', () => {
    expect(quanlydethiModule).toBeTruthy();
  });
});
