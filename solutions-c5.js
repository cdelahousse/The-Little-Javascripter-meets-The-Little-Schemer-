//Chapter Five
lilJSter = _ = extendAndWrap(lilJSter, {
	remberstar : function (a,l) { //Sometimes renders weird, but works XXX
		return isNull(l) ? null :
			isAtom(car(l)) ?
				isEq(a,car(l)) ? 
					_.remberstar(a,cdr(l)) :
					cons(car(l),_.remberstar(a,cdr(l))) :
			cons(_.remberstar(a,car(l)),_.remberstar(a,cdr(l)));
	},

	insertRstar : function (n,o,l) {  //Works, but is quirky due to the 'this' keyword (I THINK). 
		//Maybe "use strict" will fix it b/c it will not let 'this' access the global
		return isNull(l) ? null :
			isAtom(car(l)) ? 
				isEq(car(l),o) ? 
					cons(o,
							cons(n,
								_.insertRstar(n,o,cdr(l)))) :
					cons(cdr(l),_.insertRstar(n,o,cdr(l))) :
				cons(_.insertRstar(n,o,car(l)),_.insertRstar(n,o,cdr(l)));
	},

	occurstar : function (a,l) {//Note: needs plus() from chapter 4
		return isNull(l) ? 0 : //NOTE: 0, not null, because we're returning a number but reading a list
			isAtom(car(l)) ?
				isEq(car(l),a) ? add1(_.occurstar(a,cdr(l))) :
				_.occurstar(a,cdr(l)) :
			_.plus(_.occurstar(a,car(l)),_.occurstar(a,cdr(l)));
	},

	subststar : function (n,o,l) { 
		return isNull(l) ? null :
			isAtom(car(l)) ? 
				isEq(car(l),o) ?
					cons(n,
							_.subststar(n,o,cdr(l))) :
					cons(car(l),_.subststar(n,o,cdr(l))) :
			cons(_.subststar(n,o,car(l)),_.subststar(n,o,cdr(l)));
	},

	insertLstar : function (n,o,l) {
		return isNull(l) ? null :
			isAtom(car(l)) ? 
				isEq(car(l),o) ? 
					cons(n,
							cons(o,
								_.insertLstar(n,o,cdr(l)))) :
					cons(car(l),_.insertLstar(n,o,cdr(l))) :
			cons(_.insertLstar(n,o,car(l)),_.insertLstar(n,o,cdr(l)));
	},

	memberstar : function (a,l) {//XXX RECHECK
		return isNull(l) ? false:
			isAtom(car(l)) ? 
				isEq(car(l),a) ||  //Note: this is interesting, because naturally, one could have done isEq(car(l), a) ? true : instead. The OR statement makes it shorter 
					_.memberstar(a,cdr(l)) :
				_.memberstar(a,car(l)) ||
					_.memberstar(a,cdr(l)) ;
	},

	leftmost : function (l) { //XXX RECHECK -- ReRead questions
		return isAtom(car(l)) ? car(l) :
			_.leftmost(car(l));
	},
	//XXX Reread page 89 -- && stops at first false, || stops at first true. 

	isEqlist : function(l1,l2) { //XXX NOT COMPLETE! DID NOT UNDERSTAND FUNCTIONS AT  pg. 91. 
				//return	isNull(l1) && isNull(l2) ? true : 
								//isNull(l1) && isAtom(car(l2)) ? false :
								//isNull(l1) ? false :
								//isAtom(car(l1)) && isNull(l2) ?
								//isAtom(car(l1)) && isAtom(car(l2)) ?
								//isEqan(car(l1),car(l2)) && isEqlist(cdr(l1),cdr(l2)) ?
								
	}
	// XXX WRITE FUNCTION STARTING ON PAGE 91!
});
