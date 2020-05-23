#!/usr/bin/env node
import { blue } from 'turbocolor';
import { exec } from 'child_process';

function run() {
  console.log(blue('Alvar ramirez castillo'));

  exec('schematics .:new');
}

run();
