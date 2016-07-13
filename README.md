# Custom Plop Templates

Dedicated for use with apps written in TypeScript using Angular 1.x + SASS

## Generators

### Reusable Component

Small component, which will be reusable in many places.
Generates: `html`, `scss`, `component typescript` and wiring to the existing app.

### Page Component

A new component with a routing configured.
Generates: `html`, `scss`, `controller`, *optional* `model`, `service`, `tests` and wiring to the existing app.


## How to use

```bash
npm i --save-dev plop-templates-bc
touch plopfile.js
```

and paste (and adjust) following code:

```JS
'use strict';

module.exports = require('plop-templates-bc', {
  moduleName: 'app',
  sharedComponentsDir: 'src/app/components/',
  componentsIndexFile: 'src/app/components/index.ts',
  mainComponentsDir: 'src/app/',
  indexModuleFile: 'src/app/index.module.ts',
  routingConfFile: 'src/app/index.route.ts'
});

// default values provided

```