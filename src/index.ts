#!/usr/bin/env node
import { red } from 'turbocolor';
import { schematic } from '@angular-devkit/schematics';

function run() {
  console.log(red('Alvar ramirez castillo 1s'));
  schematic('new', {});
}

run();
