"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
function newSchema() {
    return schematics_1.chain([
        schematics_1.externalSchematic('@schematics/angular', 'ng-new', {
            createApplication: false,
            name: 'mark-1',
            version: '9.1.7'
        })
    ]);
}
exports.default = newSchema;
//# sourceMappingURL=index.js.map