#!/usr/bin/env node
import { red } from 'turbocolor';
import { externalSchematic, Rule, chain } from '@angular-devkit/schematics';

function newSchema(): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'ng-new', {
      createApplication: false,
      name: 'mark-1',
      version: '9.1.7'
    })
  ]);
}

function run() {
  console.log(red('Alvar ramirez castillo 1s'));
  newSchema();
}

run();
