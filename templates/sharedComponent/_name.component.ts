/** @ngInject */
export class {{className}}Controller {
  public firstName: string;
  public lastName: string;

  constructor() {
    this.firstName = 'Remove';
    this.lastName = 'Me';
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