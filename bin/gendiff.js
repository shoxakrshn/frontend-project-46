#!/usr/bin/env node
//console.log('hello diff');
import { program } from 'commander';
program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.');
program.parse();