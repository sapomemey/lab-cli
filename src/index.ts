#!/usr/bin/env node
import { red } from 'turbocolor';
import { exec } from 'child_process';
import { resolve } from 'path';

function run() {
  console.log(red('Alvar ramirez castillo 1'));
  const command = `node ${resolve('node_modules/.bin/schematics')} blank --name=bvi`
  exec(command);
}

run();
