import { yellow } from 'turbocolor';

export function nodeVersionWarning() {
  try {
    const v = process.version.replace('v', '').split('.');
    const major = parseInt(v[0], 10);
    const minor = parseInt(v[1], 10);
    if (major < 8 || (major === 8 && minor < 9)) {
      console.log(yellow(`La versión de node minima recomendada es Node 8.x. actualmente usted tiene ${process.version}.`));
    }
  } catch (e) { return; }
}