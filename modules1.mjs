// A file with . mjs extension is a JavaScript source code file that support ECMA Module (ECMAScript Module) 
//An ECMAScript module (ES module for short) is a mechanism for code reuse in JavaScript,(import export)

//how ecma script work
//import defaultone, {non-default one} from 'file name';
import name_default,{a,b,c} from './modules2.mjs';

//the non-defsult export (should have a exact name while importing it)
//for default export (any name while exporting)
console.log(name_default);
console.log(a);
console.log(b);
console.log(c);

