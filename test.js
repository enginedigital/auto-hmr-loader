const assert = require('assert');
const loader = require('./index.js');

const sample1 = `import { stuff } from 'module';
stuff();`;

loader.call({
  async() {
    return (err, newSource) => {
      assert.equal(err, null);
      assert(newSource.indexOf('[\'module\']') !== -1, 'could not find \'module\'');
    }
  },
  cacheable: console.log.bind(console),
  hot: true,
}, sample1);

const sample2 = `import { stuff } from '../relative/module';
stuff();`;

loader.call({
  async() {
    return (err, newSource) => {
      assert.equal(err, null);
      assert(newSource.indexOf('[\'../relative/module\']') !== -1, 'could not find \'../relative/module\'');
    }
  },
  cacheable: console.log.bind(console),
  hot: true,
}, sample2);

const sample3 = `noImports();`;

loader.call({
  async() {
    return (err, newSource) => {
      assert.equal(err, null);
      assert(newSource.indexOf('[]') !== -1);
    }
  },
  cacheable: console.log.bind(console),
  hot: true,
}, sample3);

const sample4 = `import { one, two, three } from 'first-module';
import { four, five, six } from 'second-module';`;

loader.call({
  async() {
    return (err, newSource) => {
      assert.equal(err, null);
      assert(newSource.indexOf('[\'first-module\', \'second-module\']') !== -1, 'could not find \'first-module\', \'second-module\'');
    }
  },
  cacheable: console.log.bind(console),
  hot: true,
}, sample4);

// TODO: handle require imports
const sample5 = `const { join } = require('path');
join(__dirname, '/thing');`;

loader.call({
  async() {
    return (err, newSource) => {
      assert.equal(err, null);
      assert(newSource.indexOf('[\'path\']') !== -1, 'could not find \'path\'');
    }
  },
  cacheable: console.log.bind(console),
  hot: true,
}, sample5);
