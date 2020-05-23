import { chain, externalSchematic } from '@angular-devkit/schematics';

export default function newSchema() {
  return chain([
    externalSchematic('@schematics/angular', 'ng-new', {
      createApplication: false,
      name: 'mark-1',
      version: '9.1.7'
    })
  ]);
}
