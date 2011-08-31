#The Little Javascripter Solutions#

These are my solutions in Javascript to [The Little Schemer](http://www.ccs.neu.edu/home/matthias/BTLS/) using [Douglas Crockford's The Little Javascripter](http://javascript.crockford.com/little.html) as a guide.

Chapters are divided into their respective HTML pages loaded with the JS. They're named accordingly. I suggest opening them and testing the solutions via the JS REPL (read-eval-print-loop) of choice. Firebug, Chrome Dev tools and others have such functionality.

###Usage:

Enter the following into the REPL to test a function: \_.\<functionname\>

	\_.member(atom,list)

TODO: Write about DC datatypes
TODO: Talk about conventions (isAtom vs Atom?)

I've divided Doug's answers by chapter to avoid function name collisions. As the book progresses, some of his functions are rewritten with different implementations but using the same name. The files are named according to the chapter they refer to and have the dc-xx prefix.

My answers reside in the solutions-cxx.js files. 


Every new chapter file creates an object that inherits the previous chapter's object. One chapter's object copies the previous chapter's object's members into itself  using the extend() function. I've also wrapped these objects so they print all perrrrty.


Word.

A note on recursion in Javascript:
Use recursion with caution. JS engines typically fail with too many levels of recursion and do not perform tail recursion optimization. Recurring in JS is actually way slower than looping.
