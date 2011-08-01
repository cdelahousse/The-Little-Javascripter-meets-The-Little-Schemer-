#The Little Javascripter Solutions#

These are my solutions to [The Little Schemer](http://www.ccs.neu.edu/home/matthias/BTLS/) in Javascript using [Douglas Crockford's The Little Javascripter](http://javascript.crockford.com/little.html).

I've divided Doug's answers by chapter to avoid name collisions. As the book progresses, the functions are rewritten with different implementations.The files are named dc-xx.js.

My answers reside in the solutions-cxx.js files. Every new chapter file creates an object that inherits the previous chapter's object.

I suggest opening the HTML files to test the solutions.

Word.

A note on recursion in Javascript:
Use recursion with caution. JS engines typically fail with too many levels of recursion and do not perform tail recursion optimization. Recurring in JS is actually way slower than looping.
