#!/usr/bin/env node
import { red } from 'turbocolor';
import { exec } from 'child_process';

function run() {
  console.log(red('Alvar ramirez castillo 1s'));
  exec('schematics blank holamundo')
}

run();
