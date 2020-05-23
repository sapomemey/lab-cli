#!/usr/bin/env node
import { red } from 'turbocolor';
import { exec } from 'child_process';
import { resolve } from 'path';

function run() {
  console.log(red('Alvar ramirez castillo 1s'));
  const command = `${resolve('node_modules/.bin/schematics')} blank alvaro`
  exec(command);
}

run();
