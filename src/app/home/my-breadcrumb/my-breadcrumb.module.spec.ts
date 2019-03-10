import { MyBreadcrumbModule } from './my-breadcrumb.module';

describe('MyBreadcrumbModule', () => {
  let myBreadcrumbModule: MyBreadcrumbModule;

  beforeEach(() => {
    myBreadcrumbModule = new MyBreadcrumbModule();
  });

  it('should create an instance', () => {
    expect(myBreadcrumbModule).toBeTruthy();
  });
});
