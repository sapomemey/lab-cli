import { externalSchematic, Rule, SchematicContext, Tree, mergeWith, apply, empty } from '@angular-devkit/schematics';

export default function newSchema(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return mergeWith(
      apply(empty(), [
        externalSchematic('@schematics/angular', 'ng-new', {
          createApplication: false,
          name: 'mark-1',
          version: '9.1.7'
        })
      ])
    )(tree, _context);
  }

  // return chain([
  //   externalSchematic('@schematics/angular', 'ng-new', {
  //     createApplication: false,
  //     name: 'mark-1',
  //     version: '9.1.7'
  //   })
  // ]);
}


// export default function newBcp(_options: Schema): Rule {
//   return (tree: Tree, _context: SchematicContext) => {
//     const optionMonoRepo = 'Mono Repo';
//     const optionMicroApps = 'Micro frontends';
//     let runSchematics = '';
//     if (_options.selected === optionMonoRepo) {
//       runSchematics = 'mono-repo';
//     }
//     if (_options.selected === optionMicroApps) {
//       runSchematics = 'micro-apps';
//     }
//     return mergeWith(
//       apply(empty(), [
//         schematic(runSchematics, {})
//       ])
//     )(tree, _context);
//   }
// }