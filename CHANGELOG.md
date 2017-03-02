# Custom Plop Templates

## v 1.2.0

- [Improved] `spec.ts` template with more sophisticated components set up
- [Breaking Change] Adjusted `index.ts` template with the new location of the module name `GlobalConfig.moduleName` -> `GlobalConfig.ApplicationConfig.moduleName`
- [Chore] Removed some not useful example code

## v 1.1.1

- [Fix] Fixed `spec.ts` template to adjust to the new way of initializing unit tests in code

## v 1.1.0

- [Breaking Changes] Changed way the files are structured in the dependent projects.

Now it's assumed that page components reside in `src/app/domain/` directory. Previously it was `src/app/` directly.

This way the project is better organized.

## v 1.0.3

- Initial plop templates configuration. 
