import '../css/style.scss';
import './datecalc.js';
import './timer.js';
// import './load.js';
import {chunk} from 'lodash/chunk';

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]