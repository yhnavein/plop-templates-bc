export * from './{{fileName}}.ctrl';
export * from './{{fileName}}.service';
{{#if modelName}}
export * from './{{fileName}}.model';
{{/if}}

import { GlobalConfig } from '../../index.config';

import { {{className}}Service } from './{{fileName}}.service';
import { {{className}}Component } from './{{fileName}}.ctrl';

export class {{className}} {
  public static bootstrap() {
    angular.module(GlobalConfig.ApplicationConfig.moduleName)
      .service('{{className}}Service', {{className}}Service)
      .component('{{cssName}}', new {{className}}Component());
  }

  public static routes($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
      .state('{{fileName}}', {
        url: '/{{fileName}}',
        template: '<{{fileName}} class="{{cssName}}-container"></{{fileName}}>'
      });
  }
}
