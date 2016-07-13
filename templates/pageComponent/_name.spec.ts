// import { {{className}}Controller } from './{{fileName}}.ctrl';
import { {{className}}Service } from './{{fileName}}.service';
// import { GlobalConfig } from '../index.config';

describe('{{niceName}}', () => {

  describe('Component', () => {
    let ctrl: any;

    // GlobalConfig.jasmineDeps();
    beforeEach(angular.mock.module('{{moduleName}}'));

    beforeEach(inject(($componentController: angular.IComponentControllerService) => {
      ctrl = $componentController('{{cssName}}', null, {});
    }));

    it('should pass', () => {
      expect(ctrl.someArray.length).toEqual(6);
    });
  });

  describe('Service', () => {
    let service: {{className}}Service;

    // GlobalConfig.jasmineDeps();
    beforeEach(angular.mock.module('{{moduleName}}'));

    beforeEach(inject(({{className}}Service: {{className}}Service) => {
      service = {{className}}Service;
    }));

    it('should pass', () => {
      expect(service.get().length > 0).toEqual(true);
    });
  });

});
