#!/usr/bin/env node
import { green } from 'turbocolor';
import { externalSchematic } from '@angular-devkit/schematics';

function run() {
  console.log(green('Alvar ramirez castillo 2'));
  externalSchematic('@schematics/angular', 'ng-new', {
    createApplication: false,
    name: 'mark-1',
    version: '9.1.7'
  })
}

run();
