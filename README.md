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

const path = require('path');

module.exports = require('plop-templates-bc', {
  appPath: path.resolve(__dirname, 'YOUR_PATH')
});
```