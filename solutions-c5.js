//Chapter Five

lilJSter.remberstar = function (a,l) { //Sometimes renders weird, but works XXX
	return isNull(l) ? null :
		isAtom(car(l)) ?
			isEq(a,car(l)) ? 
				this.remberstar(a,cdr(l)) :
				cons(car(l),this.remberstar(a,cdr(l))) :
		cons(this.remberstar(a,car(l)),this.remberstar(a,cdr(l)));
}

lilJSter.insertRstar = function (n,o,l) {  //Works, but is quirky due to the 'this' keyword (I THINK). 
	//Maybe "use strict" will fix it b/c it will not let 'this' access the global
	return isNull(l) ? null :
		isAtom(car(l)) ? 
			isEq(car(l),o) ? 
				cons(o,
						cons(n,
							this.insertRstar(n,o,cdr(l)))) :
				cons(cdr(l),this.insertRstar(n,o,cdr(l))) :
			cons(this.insertRstar(n,o,car(l)),this.insertRstar(n,o,cdr(l)));
}

lilJSter.occurstar = function (a,l) {//Note: needs plus() from chapter 4
	return isNull(l) ? 0 : //NOTE: 0, not null, because we're returning a number but reading a list
		isAtom(car(l)) ?
			isEq(car(l),a) ? add1(this.occurstar(a,cdr(l))) :
			this.occurstar(a,cdr(l)) :
		this.plus(this.occurstar(a,car(l)),this.occurstar(a,cdr(l)));
}

lilJSter.subststar = function (n,o,l) { 
	return isNull(l) ? null :
		isAtom(car(l)) ? 
			isEq(car(l),o) ?
				cons(n,
						this.subststar(n,o,cdr(l))) :
				cons(car(l), this.subststar(n,o,cdr(l))) :
		cons(this.subststar(n,o,car(l)), this.subststar(n,o,cdr(l)));
}

lilJSter.insertLstar = function (n,o,l) {
	return isNull(l) ? null :
		isAtom(car(l)) ? 
			isEq(car(l),o) ? 
				cons(n,
						cons(o,
							this.insertLstar(n,o,cdr(l)))) :
				cons(car(l),this.insertLstar(n,o,cdr(l))) :
		cons(this.insertLstar(n,o,car(l)),this.insertLstar(n,o,cdr(l)));
}

lilJSter.memberstar = function (a,l) {//XXX RECHECK
	return isNull(l) ? false:
		isAtom(car(l)) ? 
			isEq(car(l),a) ||  //Note: this is interesting, because naturally, one could have done isEq(car(l), a) ? true : instead. The OR statement makes it shorter 
				this.memberstar(a,cdr(l)) :
			this.memberstar(a,car(l)) ||
				this.memberstar(a,cdr(l)) ;
}

lilJSter.leftmost = function (l) { //XXX RECHECK -- ReRead questions
	return isAtom(car(l)) ? car(l) :
		this.leftmost(car(l));
}
//XXX Reread page 89 -- && stops at first false, || stops at first true. 

lilJSter.isEqlist = function(l1,l2) { //XXX NOT COMPLETE! DID NOT UNDERSTAND FUNCTIONS AT  pg. 91. 
			return	isNull(l1) && isNull(l2) ? true : 
							isNull(l1) && isAtom(car(l2)) ? false :
							isNull(l1) ? false :
							isAtom(car(l1)) && isNull(l2) ?
							isAtom(car(l1)) && isAtom(car(l2)) ?
							isEqan(car(l1),car(l2)) && isEqlist(cdr(l1),cdr(l2)) ?
							
}

// XXX WRITE FUNCTION STARTING ON PAGE 91!
