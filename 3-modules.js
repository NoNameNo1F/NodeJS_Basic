// CommonJS , everyfile is module(default)
// Modeles - Enclapsulated Code (only share minimum)

const names = require('./4-names');
const Hello = require('./5-utils');
const datas = require('./6-alternative-flavor');
require('./7-mind-grenade');
console.log(datas);
Hello(names.Hao);
Hello(names.Vu);
Hello(names.HaKhang);
console.log(names);