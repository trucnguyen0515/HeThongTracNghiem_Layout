import { QuanlyuserModule } from './quanlyuser.module';

describe('QuanlyuserModule', () => {
  let quanlyuserModule: QuanlyuserModule;

  beforeEach(() => {
    quanlyuserModule = new QuanlyuserModule();
  });

  it('should create an instance', () => {
    expect(quanlyuserModule).toBeTruthy();
  });
});
