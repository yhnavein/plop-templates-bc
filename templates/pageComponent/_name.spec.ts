import { {{className}}Service, {{className}}Controller } from './';
import { GlobalConfig } from '../../index.config';

describe('{{niceName}}', () => {

  describe('Component', () => {
    let scope: ng.IScope;
    let ctrl: {{className}}Controller;
    let _{{className}}Service: {{className}}Service;

    GlobalConfig.jasmineDeps();

    beforeEach(inject((
        $componentController: angular.IComponentControllerService,
        $rootScope: ng.IRootScopeService,
        {{className}}Service: {{className}}Service
    ) => {
      scope = $rootScope.$new();
      _{{className}}Service = {{className}}Service
      ctrl = $componentController<{{className}}Controller, any>('{{cssName}}', {
        $scope: scope,
        {{className}}Service: _{{className}}Service
        // other services...
      }, {});
    }));

    it('should pass', () => {
      expect(ctrl.someArray.length).toEqual(6);
    });
  });

  describe('Service', () => {
    let service: {{className}}Service;

    GlobalConfig.jasmineDeps();

    beforeEach(inject(({{className}}Service: {{className}}Service) => {
      service = {{className}}Service;
    }));

    it('should pass', () => {
      expect(service.get().length > 0).toEqual(true);
    });
  });

});
