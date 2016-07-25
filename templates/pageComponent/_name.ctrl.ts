import { {{className}}Service } from './{{fileName}}.service';
{{#if modelName}}
import { {{modelName}} } from './{{fileName}}.model';
{{/if}}

export class {{className}}Controller {
  public someArray: Array<any>;
  {{#if modelName}}
  public selected: {{modelName}};
  {{/if}}

  /* @ngInject */
  constructor(private {{className}}Service: {{className}}Service) {
    this.someArray = {{className}}Service.get();
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
    this.templateUrl = 'app/{{fileName}}/{{fileName}}.html';
    this.controllerAs = 'vm';
  }
}