"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const turbocolor_1 = require("turbocolor");
function nodeVersionWarning() {
    try {
        const v = process.version.replace('v', '').split('.');
        const major = parseInt(v[0], 10);
        const minor = parseInt(v[1], 10);
        if (major < 8 || (major === 8 && minor < 9)) {
            console.log(turbocolor_1.yellow(`La versión de node minima recomendada es Node 8.x. actualmente usted tiene ${process.version}.`));
        }
    }
    catch (e) {
        return;
    }
}
exports.nodeVersionWarning = nodeVersionWarning;
//# sourceMappingURL=node.util.js.map