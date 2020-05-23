import { nodeVersionWarning } from './utils/node.util';

async function run() {
  let args = process.argv.slice(2);

  const help = args.indexOf('--help') >= 0;

  if (help) {
    console.log(`Uso:

      npm init sapo-cli
    `);

    return 0;
  }

  nodeVersionWarning();

  
}

run();
