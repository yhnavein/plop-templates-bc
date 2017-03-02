export class {{className}}Controller {

  /** @ngInject */
  constructor() {

  }
}

export class {{className}} implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public templateUrl: string;
  public controllerAs: string;

  /** @ngInject */
  constructor() {
    this.bindings = {};
    this.controller = {{className}}Controller;
    this.templateUrl = 'app/components/{{fileName}}/{{fileName}}.html';
    this.controllerAs = 'vm';
  }
}