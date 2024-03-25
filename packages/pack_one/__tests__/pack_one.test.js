'use strict';

const packOne = require('..');
const assert = require('assert').strict;

assert.strictEqual(packOne(), 'Hello from packOne');
console.info('packOne tests passed');
