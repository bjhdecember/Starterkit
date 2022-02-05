import './index.css';

import { index } from 'cheerio/lib/api/traversing';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log('I would pay ${courseValue} for this awesome course!');