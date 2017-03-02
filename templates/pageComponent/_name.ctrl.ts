import { {{className}}Service } from './{{fileName}}.service';
{{#if modelName}}
import { {{modelName}} } from './{{fileName}}.model';
{{/if}}

export class {{className}}Controller {

  /* @ngInject */
  constructor(private {{className}}Service: {{className}}Service, private $state: angular.ui.IStateService) {

  }

}

export class {{className}}Component implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public templateUrl: string;
  public controllerAs: string;

  /** @ngInject */
  constructor() {
    this.bindings = {};
    this.controller = {{className}}Controller;
    this.templateUrl = 'app/domain/{{fileName}}/{{fileName}}.html';
    this.controllerAs = 'vm';
  }
}