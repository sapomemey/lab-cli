#!/usr/bin/env node
import { green } from 'turbocolor';
import { exec } from 'child_process';

function run() {
  console.log(green('Alvar ramirez castillo 2'));
  const command = `node schematics blank --name=bvi`
  exec(command);
}

run();
