#!/usr/bin/env node
import { red } from 'turbocolor';
import { newSchema } from './new/index';

function run() {
  console.log(red('Alvar ramirez castillo 1s'));
  newSchema();
}

run();
